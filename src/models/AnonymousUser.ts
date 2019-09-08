import names = require('../data/names.json');
import addresses = require('../data/addresses.json');

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
​​​
export function getRandomItem<T>(array: T[]) {
    return array[getRandomInt(array.length)];
}

/**
 * ランダムにユーザを生成します
 * @param type - 匿名ユーザの性別・種別
 * @returns ユーザ
 */
export class AnonymousUser {
    constructor(type: string) {
        this.sex = type === 'male' ? '男性' : '女性';
        const firstName = type === 'male'
            ? getRandomItem(names.first_name.male)
            : getRandomItem(names.first_name.female);
        const lastNames = getRandomItem(names.last_name);

        this.name = `${lastNames[0]} ${firstName[0]}`;
        this.nameHiragana = `${lastNames[1]} ${firstName[1]}`;
        this.nameKatakana = `${lastNames[2]} ${firstName[2]}`;

        const prefectures = getRandomItem(addresses.addresses.prefecture);
        const cities = getRandomItem(addresses.addresses.city);
        const towns = getRandomItem(addresses.addresses.town);

        this.address = `${prefectures[0]}${cities[0]}${towns[0]}`;
        this.addressHiragana = `${prefectures[1]}${cities[1]}${towns[1]}`;
        this.addressKatakana = `${prefectures[2]}${cities[2]}${towns[2]}`;
    }

    readonly sex!: string;
    readonly name!: string;
    readonly nameHiragana!: string;
    readonly nameKatakana!: string;
    readonly address!: string;
    readonly addressHiragana!: string;
    readonly addressKatakana!: string;
}
