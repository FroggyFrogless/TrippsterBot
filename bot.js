const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

     * Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)
     * @type {boolean}
     */
    this.system = data.type === 35;

   * Checks if this collection shares identical key-value pairings with another.
   * This is different to checking for equality using equal-signs, because
   * the collections may be different objects, but contain the same data.
   * @param {Collection} collection Collection to compare with
   * @returns {boolean} Whether the collections have identical contents
   */
  equals(collection) {
    if (!collection) return false;
    if (this === collection) return true;
    if (this.size !== collection.size) return false;
    return !this.find((value, key) => {
      const testVal = collection.get(this.system);
      return testVal !== value || (testVal === undefined && !collection.has(this.system));
    });
  }


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
