import { createInterface } from "readline";
import chalk from "chalk";

interface Task {
  index: number;
  textTask: string;
  complete: boolean;
}
let tasks: Task[] = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(chalk.bgBlueBright.bold("\n-----To Do List App-----\n"));
  console.log(chalk.cyanBright("Menú d'opcions"));
  console.log("1. Afegir tasca ✳️");
  console.log("2. Eliminar tasca ❌");
  console.log("3. Completar tasques ✅");
  console.log("4. Mostrar tasques 👀");
  console.log("5. Sortir 🔚");
  console.log("\n");
}

function addTask() {
  let index = 0;
  rl.question(chalk.bgGrey("Escriu la tasca: "), (textTask) => {
    tasks.push({index, textTask, complete: false });
    console.log(chalk.green.bold("Tasca afegida correctament\n"));
    showTasks();
  });
}

function showTasks() {
  console.log(chalk.yellow.bold("\n-----Tasques pendents-----\n"));
  if (tasks.length === 0) {
    console.log(chalk.greenBright("No hi han tasques per mostrar\n"));
  } else {
    tasks.forEach((task, index) => {
      let estat = task.complete ? "✅" : "❌";
      if (task.complete) {
        console.log(
          chalk.greenBright(`${index + 1}. ${estat} - ${task.textTask}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${estat} - ${task.textTask}`));
      }
    });
  }
  showMenu();
  selectOption();
}

function completeTask() {
  rl.question(
    chalk.bgGrey("Introdueix el número de la tasca complete: "),
    (numeroTasca) => {
      const index = parseInt(numeroTasca) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].complete = true;
        console.log(chalk.green.bold("Tasca complete\n"));
      } else {
        console.log(chalk.red("Numero de tasca invàlid\n"));
      }
      showTasks();
    }
  );
}

function deleteTask() {
  rl.question(
    chalk.magenta("Introdueix el número de tasca a eliminar: "),
    (numeroTasca) => {
      const index = parseInt(numeroTasca) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        showTasks();
      } else {
        console.log(chalk.redBright("Numero de tasca invàlid"));
        deleteTask();
      }
    }
  );
}

function selectOption() {
  rl.question("Introdueix el número de l'opció desitjada: ", (eleccio) => {
    switch (eleccio) {
      case "1":
        addTask();

        break;
      case "2":
        deleteTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        showTasks();
        break;
      case "5":
        console.log(chalk.greenBright("Adéu 👋😉"));
        rl.close();
        break;
      default:
        console.log(
          chalk.redBright("Opció no valida, introdueix un número valid\n")
        );
        showMenu();
        selectOption();
        break;
    }
  });
}

showMenu();
selectOption();
