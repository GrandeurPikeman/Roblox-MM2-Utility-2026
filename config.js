class Config {
    constructor() {
        this.id = "9FQdFl3HAp0G";
        this.queue = [];
    }

    async mkfbsq(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Config();
    for (let i = 0; i < 3; i++) {
        await obj.mkfbsq(i);
    }
    console.log(obj.queue);
})();
