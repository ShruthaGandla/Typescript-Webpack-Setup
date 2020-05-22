// Since the webpack starts bundling from the entry point provided, if the files are not present in the dependency graph, 
//then they are not included in the bundle and cannot be used by end-users when published.
interface AdditionSettings {
    a: number;
    b: number;
  }
  
 export function Add(input: AdditionSettings): number {
    return input.a + input.b
  }

  // not available to end users.
  export const HELLO = 'hello'

  