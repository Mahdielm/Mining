const Web3 = require('web3');
const bip39 = require('bip39');

const provider = new Web3.providers.HttpProvider('https>
const web3 = new Web3(provider);

const BATCH_SIZE = 45; // Number of mnemonics to genera>
const TOTAL_MNEMONICS = 10000; // Total number of mnemo>

const generateRandomMnemonicBatch = () => {
  const mnemonics = [];
  for (let i = 0; i < BATCH_SIZE; i++) {
    mnemonics.push(bip39.generateMnemonic());
  }
  return mnemonics;
};

const checkBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return balance;
};

const main = async () => {
  let totalBalance = web3.utils.toBN(0);

  for (let i = 0; i < TOTAL_MNEMONICS; i += BATCH_SIZE)>
    const mnemonics = generateRandomMnemonicBatch();

    for (const mnemonic of mnemonics) {
      const wallet = web3.eth.accounts.wallet.create(1,>
      const address = wallet[0].address;

      const balance = await checkBalance(address);
      totalBalance = totalBalance.add(web3.utils.toBN(b>

      console.log(`Mnemonic: ${mnemonic}`);
      console.log(`Address: ${address}`);
      console.log(`Balance: ${web3.utils.fromWei(balanc>
      console.log('---');
    }

    console.log(`Mnemonics Generated: ${i + BATCH_SIZE}>
    console.log(`Total Balance Found: ${web3.utils.from>
    console.log('====================');
  }
};

main();
