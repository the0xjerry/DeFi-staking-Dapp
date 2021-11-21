const Kintsugi = artifacts.require ('Thether');

module.export = async function (caller) {
   await caller.call ('Thether');
}