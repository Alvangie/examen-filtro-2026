// Declaración de variables (Stats extraídas del HTML)
const charName = "Zara Darkbane";
const charClass = "Hechicera";
let charLevel = 7;
let health = 80;
let mana = 120;
const attackValue = 45;
const defenseValue = 30;

// 2. Funciones

/**
 * calculateDamage  Función Declarada
 * con llaves para la logica de validacion
 */
function calculateDamage(attack, defense) {
    const damageResult = attack - defense;
    if (damageResult < 0) {
        return 0;
    }
    return damageResult;
}

/**
 * isAlive - Arrow Function
 * Retorna true si la vida es mayor a 0.
 */
const isAlive = (currentHealth) => currentHealth > 0;

/**
 * canCastSpell - Arrow Function
 * verifica mana suficiente y que no esté aturdid.
 */
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

/**
 * getPresentation - Función Declarada
 * formato: 'Nombre — Clase (Nivel N)'
 */
function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

// Ejecución y Logs en Consola (Evitando números mágicos)

console.log("--- Ficha de Personaje: Datos de Consola ---");

// Presentación
const presentation = getPresentation(charName, charClass, charLevel);
console.log("Presentación:", presentation);

// Calculo de daño contra un enemigo genérico (ejemplo: defensa 20)
const enemyDefense = 20;
const totalDamage = calculateDamage(attackValue, enemyDefense);
console.log(`Daño infligido al enemigo (Defensa ${enemyDefense}):`, totalDamage);

// estado de vida
console.log("¿El personaje sigue con vida?:", isAlive(health));

// Intento de lanzar 'Bola de Fuego' (Costo: 30 mana)
const fireBallCost = 30;
const currentlyStunned = false;
console.log(`¿Puede lanzar Bola de Fuego (Costo ${fireBallCost})?:`, canCastSpell(mana, fireBallCost, currentlyStunned));