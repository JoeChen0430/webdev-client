"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as client from "../../client";
import type { Module as ModuleType } from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  // 5.4.6 — Express filters by course, so there is no client-side filter and
  // the Chapter 4 Zustand module store is no longer the source of truth.
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [moduleName, setModuleName] = useState("");

  // The loader returns the list instead of writing state, so every state
  // update happens at a call site rather than synchronously inside the effect.
  const loadModules = useCallback(async () => {
    try {
      return await client.findModulesForCourse(courseId);
    } catch {
      return [];
    }
  }, [courseId]);

  useEffect(() => {
    const load = async () => setModules(await loadModules());
    void load();
  }, [loadModules]);

  const createModuleForCourse = async () => {
    if (!moduleName.trim()) return;
    try {
      const newModule = await client.createModuleForCourse(courseId, {
        name: moduleName,
      });
      setModules([...modules, newModule]);
      setModuleName("");
    } catch {
      /* server down */
    }
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      setModules(modules.filter((m) => m._id !== moduleId));
    } catch {
      /* already gone */
    }
  };

  // `editing` stays local; only Enter sends the rename to the server.
  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)),
    );
  };

  const setModuleDraft = (module: ModuleType) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

  const saveModule = async (module: ModuleType) => {
    try {
      await client.updateModule(module);
      setModules(
        modules.map((m) =>
          m._id === module._id ? { ...module, editing: false } : m,
        ),
      );
    } catch {
      /* server down */
    }
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            title={
              module.editing ? (
                <input
                  className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                  defaultValue={module.name}
                  onChange={(e) =>
                    setModuleDraft({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      void saveModule(module);
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
            controls={
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={removeModule}
                editModule={editModule}
              />
            }
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
