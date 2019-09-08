import { AnonymousUser, getRandomItem } from './models/AnonymousUser';

const sexs = ['male', 'famale'];

// NOTE: 動作確認用
for (let index = 0; index < 5; index++) {
    const user = new AnonymousUser(getRandomItem(sexs));

    console.log(`
    ${user.sex}
    ${user.name}(${user.nameHiragana}/${user.nameKatakana})
    ${user.address}
    ${user.addressHiragana}
    ${user.addressKatakana}
    `);
}
