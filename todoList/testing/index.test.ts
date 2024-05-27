import { describe, expect, beforeEach, test, vitest } from "vitest";
import {
  tasques,
  mostrarTasca,
  eliminarTasca,
  afegirTasca,
  completarTasca,
} from "../src/index";
import { mock } from "node:test";

describe("test de les funcions de la ToDo list", () => {
  beforeEach(() => {
    tasques.length = 0;
  });
  const documentMock = {
    getElementById: () => ({
      value: "Tarea de prueba",
    }),
  };
  const originalDocument = globalThis.document;

  test("afegirTasca debería agregar una tarea", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    afegirTasca();
    expect(tasques.length).toEqual(1);
  });

  test("eliminarTasca() hauria d'eliminar una tasca de l'array", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    eliminarTasca();
    expect(tasques).toHaveLength(0);
    globalThis.document = originalDocument;
  });

  test("mostrarTasca() hauria de mostrar l'array de tasques", () => {
    globalThis.document = documentMock as any;
    globalThis.alert = vitest.fn();
    tasques.length = 1;
    mostrarTasca();
    expect(tasques).toHaveLength(1);
    globalThis.document = originalDocument;
  });

  test("completarTasca() hauria de completar una tasca", () => {
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
    afegirTasca();
    completarTasca();
    expect(tasques[0].completada).toBe(true);
    globalThis.document = originalDocument;
  });
});
