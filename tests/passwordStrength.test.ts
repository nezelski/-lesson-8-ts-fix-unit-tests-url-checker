import {calculatePasswordStrength} from "../src/passwordStrength";

describe("Password Strength", () => {
    test('returns "Strong" if all conditions are met', () => {
        expect(calculatePasswordStrength('Gf6!rthft44rty')).toBe('Strong');
    })
    test('returns strong if password length is 12 (boundary value) and other conditions are met', () => {
        expect(calculatePasswordStrength('Ty456?_7753d')).toBe('Strong');
    })
    test('returns Strong if password length is > 8 and < 12 and other conditions are met', () => {
        expect(calculatePasswordStrength('D4rty:utg')).toBe('Strong');
    })
    test('returns strong if password length = 8 (boundary value)and other conditions are met', () => {
        expect(calculatePasswordStrength('345^GTgh')).toBe('Strong');
    })
    test('returns Moderate if password length = 7 (boundary value) and other conditions are met', () => {
        expect(calculatePasswordStrength('78HGfe<')).toBe('Moderate');
    })
    test('returns "Strong" if password is with no digits and length > 12 ', () => {
        expect(calculatePasswordStrength('?YUhhgftroUHYGF')).toBe('Strong');
    })
    test('Returns "Moderate" if password length > 8 and < 12, no digits', () => {
        expect(calculatePasswordStrength('HHygtr?ikh')).toBe('Moderate');
    })
    test('returns Moderate if password length = 8 and no upper case', () => {
        expect(calculatePasswordStrength('fg546>?k')).toBe('Moderate');
    })
    test('returns Weak if password length = 7 (boundary value), and no digits', () => {
        expect(calculatePasswordStrength('AS>uhoy')).toBe('Weak');
    })
    test('returns "Weak" if password length < 8,no special symbols', () => {
        expect(calculatePasswordStrength('7HJu')).toBe('Weak');
    })
    test('returns "Weak" if password length < 8, no lower case', () => {
        expect(calculatePasswordStrength('HG6<')).toBe('Weak');
    })
    test('returns "Weak" if password length = 8, no letters', () => {
        expect(calculatePasswordStrength('567??760')).toBe('Weak');
    })
    test('returns "Weak" if password length > 8, < 12, no digits and special symbols', () => {
        expect(calculatePasswordStrength('hgGUjYjkD')).toBe('Weak');
    })
    test('returns "Weak" if password length > 8, < 12, no upper case and no digits', () => {
        expect(calculatePasswordStrength('fhdgtr>jhg?')).toBe('Weak');
    })
    test('returns "Weak" if password length = 11 (Boundary value), no special symbols and no upper case', () => {
        expect(calculatePasswordStrength('d7f6rrf909y')).toBe('Weak');
    })
    test('returns "Weak" if password length = 12 (boundary value), with  digits only', () => {
        expect(calculatePasswordStrength('836502375138')).toBe('Weak');
    })
    test('returns "Weak" if password length > 12, with lower case letters only', () => {
        expect(calculatePasswordStrength('kdgfrtyesopvydehyfrtswfdtrhf')).toBe('Weak');
    })
    test('returns "Weak" if password length > 12, with upper case letters only', () => {
        expect(calculatePasswordStrength("GHWIFPLCNSWIFREW")).toBe('Weak');
    })
    test('returns "Weak" if password length > 12, with special symbols  only', () => {
        expect(calculatePasswordStrength('*^%^&*&^%$#&()>?><')).toBe('Weak');
    })
    test('returns "Very Weak" if password length = 8 (boundary value),with digits only', () => {
        expect(calculatePasswordStrength('54679341')).toBe('Very Weak');
    })
    test('returns "Very Weak" if password length = 11 (boundary value), with special symbols only', () => {
        expect(calculatePasswordStrength('&%^$><?_+^&')).toBe('Very Weak');
    })
    test('returns "Very Weak" if password length > 8 and < 12, with upper case letters only', () => {
        expect(calculatePasswordStrength('THDWSOPASW')).toBe('Very Weak');
    })
    test('returns "Very Weak" if password length < 8, with digits and lower case letters only', () => {
        expect(calculatePasswordStrength('76hgt')).toBe('Very Weak');
    })
    test('returns "Very Weak" if password length < 8, with upper case letters and symbols only', () => {
        expect(calculatePasswordStrength('HT*&')).toBe('Very Weak');
    })
    test('returns "Very Weak" if password length < 8, with lower case letters and symbols only', () => {
        expect(calculatePasswordStrength('*&hg')).toBe('Very Weak');
    })
    test ('returns "very Weak" if password length = 0', () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    })
})


