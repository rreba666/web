/*
要求：
1. 创建 GameCharacter 构造函数
   - 属性：name, health（生命值）, attackPower（攻击力）
   - 方法：attack(target) 攻击目标，减少目标生命值
   - 方法：isAlive() 检查是否存活（health > 0）

2. 创建 Player 构造函数（继承 GameCharacter）
   - 添加属性：experience（经验值）
   - 重写 attack 方法：击败敌人后增加经验值

3. 创建 Enemy 构造函数（继承 GameCharacter）
   - 添加属性：type（敌人类型）

4. 测试：创建玩家和敌人，模拟战斗过程
*/

class GameCharacter {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(target) {
        if (!target.isAlive()) {
            console.log(`${target.name}已经死亡，无法攻击`);
            return false;
        }
        
        console.log(`${this.name}攻击${target.name}！`);
        target.health -= this.attackPower;
        
        if (target.health < 0) target.health = 0;
        
        console.log(`造成${this.attackPower}点伤害，${target.name}生命值剩余${target.health}`);
        
        if (!target.isAlive()) {
            console.log(`${target.name}被击败了！`);
        }
        
        return true;
    }

    isAlive() {
        return this.health > 0;
    }

    getInfo() {
        return `${this.name} [生命值: ${this.health}, 攻击力: ${this.attackPower}]`;
    }
}

class Player extends GameCharacter {
    constructor(name, health, attackPower, experience = 0) {
        super(name, health, attackPower);
        this.experience = experience;
    }

    attack(target) {
        const wasAlive = target.isAlive();
        const attackSuccess = super.attack(target);
        
        if (attackSuccess && wasAlive && !target.isAlive()) {
            this.experience += 10;
            console.log(`${this.name}击败${target.name}，获得10点经验值！当前经验：${this.experience}`);
        }
        
        return attackSuccess;
    }

    getInfo() {
        return `${super.getInfo()}, 经验值: ${this.experience}`;
    }
}

class Enemy extends GameCharacter {
    constructor(name, health, attackPower, type) {
        super(name, health, attackPower);
        this.type = type;
    }

    getInfo() {
        return `${super.getInfo()}, 类型: ${this.type}`;
    }
}

// 测试代码
console.log("=== 创建角色 ===");
const player = new Player('冒险者张三', 100, 20);
const enemy = new Enemy('史莱姆', 50, 5, '普通怪物');

console.log(player.getInfo());
console.log(enemy.getInfo());

console.log("\n=== 战斗开始 ===");
// 玩家攻击敌人
player.attack(enemy);
console.log(enemy.getInfo());

// 敌人攻击玩家
enemy.attack(player);
console.log(player.getInfo());

// 继续战斗直到一方倒下
console.log("\n=== 继续战斗 ===");
let round = 1;
while (player.isAlive() && enemy.isAlive()) {
    console.log(`\n--- 第${round}回合 ---`);
    player.attack(enemy);
    if (enemy.isAlive()) {
        enemy.attack(player);
    }
    round++;
    
    // 防止无限循环
    if (round > 10) break;
}

console.log("\n=== 战斗结束 ===");
console.log(player.getInfo());
console.log(enemy.getInfo());

// 测试死亡后的攻击
console.log("\n=== 测试死亡后攻击 ===");
player.attack(enemy);