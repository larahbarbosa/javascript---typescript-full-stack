function recursiva(max) {
    if (max >= 10) return; //se essa F for maior ou igual a 10 eu não deixo ela executar
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

//função recursiva: simplesmente uma função que se chama de volta