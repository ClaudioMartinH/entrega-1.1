import { describe, expect, beforeEach, test, vitest } from "vitest";
import {
  tasks,
  showTasks,
  deleteTask,
  addTask,
  completeTask,
} from "../src/index";


describe("test de les funcions de la ToDo list", () => {
  beforeEach(() => {
    tasks.length = 0;
  });
  const documentMock = {
    getElementById: () => ({
      value: "Tarea de prueba",
    }),
  };
  const originalDocument = globalThis.document;

  test("addTask hauria d'afegfir una tasca a l'array de tasques", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    addTask();
    expect(tasks.length).toEqual(1);
  });

  test("deleteTask() hauria d'eliminar una tasca de l'array", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    deleteTask();
    expect(tasks).toHaveLength(0);
    globalThis.document = originalDocument;
  });

  test("showTasks() hauria de mostrar l'array de tasques", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    addTask();
    showTasks();
    expect(tasks).toHaveLength(1);
    globalThis.document = originalDocument;
  });

  test("completeTask() hauria de completar una tasca", () => {
    const documentMock = {
      getElementById: (id: string) => {
        if (id === "tskUs") {
          return {
            value: "1",
          };
        }
        return null;
      },
    };
    globalThis.alert = vitest.fn();
    globalThis.document = documentMock as any;
    addTask();
    completeTask();
    expect(tasks[0].complete).toBe(true);
    globalThis.document = originalDocument;
  });
});
