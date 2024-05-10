import { RsaDigitalSignatureResult, SHAED25519DalekDigitalSignatureResult, Shaed25519DalekDigitalSignatureResult, sha256Ed25519DigitalSignature, sha256Ed25519DigitalSignatureVerify, sha256RsaDigitalSignature, sha256RsaVerifyDigitalSignature, sha512Ed25519DigitalSignature } from "../../index";
import { IDigitalSignature } from "./digital-signature-base";

export class DigitalSignatureSHA256Wrapper implements IDigitalSignature {
    
    createED25519(dataToSign: number[]): Shaed25519DalekDigitalSignatureResult {
        if (dataToSign?.length === 0) {
            throw new Error("Must provide allocated data to sign");
        }
        return sha256Ed25519DigitalSignature(dataToSign);
    }

    verifyED25519(publicKey: number[], dataToVerify: number[], signature: number[]): boolean {
        if (!publicKey) {
            throw new Error("You must provide a public key for verify with ED25519");
        }
        if (dataToVerify?.length === 0) {
            throw new Error("Must provide allocated data to verify");
        }
        if (signature?.length === 0) {
            throw new Error("Must provide allocated signature to verify");
        }
        return sha256Ed25519DigitalSignatureVerify(publicKey, dataToVerify, signature);
    }

    createRsa(rsa_key_size: number, data_to_sign: number[]): RsaDigitalSignatureResult {
        if (rsa_key_size !== 1024 && rsa_key_size !== 2048 && rsa_key_size !== 4096) {
            throw new Error("You need to provide an appropriate RSA key size.");
        }
        if (data_to_sign?.length === 0) {
            throw new Error("Must provide allocated data to sign");
        }
        return sha256RsaDigitalSignature(rsa_key_size, data_to_sign);
    }
    
    verifyRSa(public_key: string, data_to_verify: number[], signature: number[]): boolean {
        if (!public_key) {
            throw new Error("Must provide a public key");
        }
        if (data_to_verify?.length === 0) {
            throw new Error("Must provide an allocated data to verify");
        }
        if (signature?.length === 0) {
            throw new Error("Must provide an allocated signature");
        }
        return sha256RsaVerifyDigitalSignature(public_key, data_to_verify, signature);
    }
}