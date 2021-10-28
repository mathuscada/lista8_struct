const acharQuadradosPerfeitos = (n) => {
    const sqrt = Math.sqrt(n);
    if(Math.floor(sqrt) === Math.ceil(sqrt)) {
        if(sqrt === 0) {
            return {
                "anterior": null,
                "atual": 0,
                "posterior": 1
            }
        }
        return {
            "anterior": (sqrt - 1)**2,
            "atual": n,
            "posterior": (sqrt + 1)**2
        }
    }
    return -1;
}

console.log(acharQuadradosPerfeitos(144));