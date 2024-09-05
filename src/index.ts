import generate from "./generator";
import visualise from './visualise'

console.log('Hello, Suguru!')

function helloWorld() {
    document.getElementById("hello-world")!.textContent = "Hello, World!";
}

const { solution} = generate(4, 5)
visualise(solution)
  
helloWorld();
