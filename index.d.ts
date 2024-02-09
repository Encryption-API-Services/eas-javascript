/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function argon2Hash(password: string): string
export function argon2Verify(hashedPassword: string, passwordToVerify: string): boolean
export function bcryptHash(passwordToHash: string): string
export function bcryptVerify(hashedPassword: string, passwordToVerify: string): boolean
export function scryptHash(passwordToHash: string): string
export function scryptVerify(hashedPassword: string, passwordToVerify: string): boolean
export function sha512(dataToHash: Array<number>): Array<number>
export function sha512Verify(dataToHash: Array<number>, dataToVerify: Array<number>): boolean
export function sha256(dataToHash: Array<number>): Array<number>
export function sha256Verify(dataToHash: Array<number>, dataToVerify: Array<number>): boolean
export function x25519GenerateSecretAndPublicKey(): X25519SecretPublicKeyResult
export function x25519DiffieHellman(mySecretKey: Array<number>, usersPublicKey: Array<number>): Array<number>
export function aesNonce(): Array<number>
export function aes128Key(): Array<number>
export function aes256Key(): Array<number>
export function aes128Encrypt(aesKey: Array<number>, nonce: Array<number>, plaintext: Array<number>): Array<number>
export function aes128Decrypt(aesKey: Array<number>, nonce: Array<number>, ciphertext: Array<number>): Array<number>
export function aes256Encrypt(aesKey: Array<number>, nonce: Array<number>, plaintext: Array<number>): Array<number>
export function aes256Decrypt(aesKey: Array<number>, nonce: Array<number>, ciphertext: Array<number>): Array<number>
export function generateRsaKeys(keySize: number): RsaKeyPairResult
export function encryptPlaintextRsa(publicKey: string, plaintext: Array<number>): Array<number>
export function decryptCiphertextRsa(privateKey: string, ciphertext: Array<number>): Array<number>
export type x25519SecretPublicKeyResult = X25519SecretPublicKeyResult
export class X25519SecretPublicKeyResult {
  publicKey: Array<number>
  secretKey: Array<number>
  constructor(publicKey: Array<number>, secretKey: Array<number>)
}
export type RSAKeyPairResult = RsaKeyPairResult
export class RsaKeyPairResult {
  privateKey: string
  publicKey: string
  constructor(privateKey: string, publicKey: string)
}
