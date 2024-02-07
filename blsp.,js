const forge = require('node-forge');

function rsaEncryptWithPublicKey(message) {
                // 清理公钥字符串并导入为node-forge格式的公钥
                const publicKeyStr = `
            -----BEGIN PUBLIC KEY-----
            MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsMSkwxuf65OS5XweB70c
            gM8HMWe5lDMQiIGeGCNIixMmQ5AS0QjriOeoAFinZwoUbh6gTlxLOHkhhrUpe/Gj
            b2URQ6tQDvDmzpWY/AUGoAYE8kYtk+yQOU8aDsp/gth73cBk3/dZWrlJJD2WgJjF
            UIZwRtQ1Qh2lxykDLrxEa7ZyZMnKdqHOJCVoFIpV6X0N+u8M6CCXK4NC+eKbqzj1
            YVu8wR8aL+5OarBupCo8grdetH36GCsyvb6ayuosiXJSSVkcHPLRlWIMWbYpM6Wg
            GGeNIpO7dJYB3GUalAmu7ZaeX0a0vOSiKP48ogDO6yqDqB2Tm9zGPT51s7/8qsFk
            8wIDAQAB
            -----END PUBLIC KEY-----
            `;

                const publicKey = forge.pki.publicKeyFromPem(publicKeyStr);

                // 使用公钥加密消息
                const encrypted = publicKey.encrypt(forge.util.encodeUtf8(message));

                // 将加密后的数据编码为Base64
                const encryptedBase64 = forge.util.encode64(encrypted);

                return encryptedBase64;
            }

function rsa_str(message){
                const encryptedMessage = rsaEncryptWithPublicKey(message);
                console.log("Encrypted Message:", encryptedMessage);
                return encryptedMessage;
            }
