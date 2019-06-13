const { Launcher } = require('epicgames-client');

const launcher = new Launcher({
    email: '',
    password: '',
  });
  
  (async () => {
  
    if(!await launcher.init() || !await launcher.login()) {
      throw new Error('Error while initialize or login process.');
    }
    
    const playerName = 'Thomas_Gunning';
    const account = await launcher.getProfile(playerName);
    if(!account) throw new Error(`Player ${playerName} not found!`);
      
    console.log(`${account.name}'s id: ${account.id}`);
    console.log(`${launcher.account.lastLogin}`);
    console.log(`${launcher.account.ageGroup}`);
    console.log(`${launcher.account.headless}`);
    console.log(`${launcher.account.country}`);

    // "Kysune's id: 9a1d43b1d826420e9fa393a79b74b2ff"
  
  })();