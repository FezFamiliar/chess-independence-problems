export var perm = [];

function permutate(k, n, sol, flag) {
    if(k >= n)
    {
        if(!queen_collision(sol, n))
        {
            perm.push(print_queens(sol, n));
        }
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


function queen_collision(permutation, n) {

    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if(Math.abs(permutation[i] - permutation[j]) == Math.abs(i - j)){
                return true;                
            }
        }    
    }

    return false;           
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

export function something()
{
    console.log('ff');
}

permutate(0, 8, [0, 0, 0, 0, 0, 0, 0, 0], Array(8).fill(false));