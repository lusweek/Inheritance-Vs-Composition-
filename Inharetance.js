class Monster {
    constructor(name, specialAttackAction) {
        this.name = name
        this.specialAttackAction = specialAttackAction
    }
    
    specialAttack() {
        console.log(`${this.name} used special attack: ${this.specialAttackAction}`)
    }

    attack() {
        console.log(`${this.name} attacked`)
    }

    walk() {
        console.log(`${this.name} walked`)
    }

}

// We are Inheriting the walk, attack and spessialAttack from the Monster class.
// What if we want to create a monster that can both fly and swim? 
// we need to inherit both the FlyingMonster and the SwimmingMonster, copy logic or 
// add the fly and swim logit to the Monster class. In this case, using composition 
// is a better alternative.   
    class FlyingMonster extends Monster {
        fly() {
            console.log(`${this.name} flew`)
        }
    }

    class SwimmingMonster extends Monster {
        swim() {
            console.log(`${this.name} swam`)
        }
    }

    const bear = new Monster('bear', 'rip head off')
    bear.walk()
    bear.specialAttack()

    const killerEagle = new FlyingMonster('Killer Eagle', 'super vision')
    killerEagle.specialAttack()