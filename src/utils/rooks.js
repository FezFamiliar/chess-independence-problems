export var r_perm = [];

function permutate(k, n, sol, flag) {
    if(k >= n)
    {

        r_perm.push(print_queens(sol, n));
        
    }
    else
    {
        for(let i = 0; i < n; ++i)
        {
            if(flag[i] == false)
            {
                flag[i] = true;
                sol[k] = i + 1; 
                permutate(k + 1, n, sol, flag);
                flag[i] = false;
            }
        }
    }
}



function print_queens(permutation, n) {

    let r = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if(permutation[i] == j + 1) {   
                r[i][j] = 1;
            }
        } 
    }

    return r;
}

permutate(0, 8, [0, 0, 0, 0, 0, 0, 0, 0], Array(8).fill(false));