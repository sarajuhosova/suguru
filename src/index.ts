import generate from './generator';
import visualise from './visualise';
import prettyPrint from './visualise/console';

const { start, solution } = generate(4, 5)

const table = document.getElementById('suguru')! as HTMLTableElement

visualise(start, table)

prettyPrint(start)
