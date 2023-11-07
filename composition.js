

function walker({ name }) {
    return {
        walk: () => console.log(`${name} walked`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function specialAttacker({ name, specialAttackAction }) {
    return {
        specialAttack: () => console.log(`${name} used special attack: ${specialAttackAction}`)
    }
}



function SwimmingMosterCreator({name, specialAttackAction}) {
    const monster = { name: name, specialAttackAction: specialAttackAction }

    return {
        ...monster,
        ...walker(monster),
        ...specialAttacker(monster)
    }
}


function flyingSwimmingMonsterCreator({name, specialAttackAction}) {
    const monster = { name: name, specialAttackAction: specialAttackAction }

    return {
        ...monster,
        ...walker(monster),
        ...flyer(monster),
        ...swimmer(monster),
        ...specialAttacker(monster)
    }
}


const monster = SwimmingMosterCreator({name: 'Monster', specialAttackAction: 'rip head off'})
monster.walk()
monster.specialAttack()

const killerEagle = flyingSwimmingMonsterCreator({name: 'Killer Eagle', specialAttackAction: 'Super vision'})
killerEagle.walk()
killerEagle.fly()
killerEagle.swim()
killerEagle.specialAttack()
