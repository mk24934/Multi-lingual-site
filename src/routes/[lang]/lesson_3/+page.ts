// code_block = {code_block1, code_block2}

let code_r_1 = `print("Hello World with R!")
df <- data.frame(a = c(1,2))
`;

let code_r_2 = `print("Second line of R Code")
`;

let code_julia_1 = `print("Hello World with Julia!")
df <- DataFrame("a" => 1:2)
`;

let code_julia_2 = `print("Second line of Julia Code")
`;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log('in +page.ts file')

    return {
      code: {
            r: [code_r_1, code_r_2],
            julia: [code_julia_1, code_julia_2]
        }
    }
}