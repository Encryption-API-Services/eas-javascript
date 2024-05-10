import { RSADigitalSignatureResult, SHAED25519DalekDigitalSignatureResult } from "../../index";

export interface IDigitalSignature {
    createRsa(rsa_key_size: number, data_to_sign: Array<number>): RSADigitalSignatureResult;
    verifyRSa(public_key: string, data_to_verify: Array<number>, signature: Array<number>): boolean;
    createED25519(dataToSign: Array<number>): SHAED25519DalekDigitalSignatureResult;
    verifyED25519(publicKey: Array<number>, dataToVerify: Array<number>, signature: Array<number>): boolean;
}