# [1.4.0](https://github.com/mindfuel/meta/compare/v1.3.0...v1.4.0) (2022-05-04)


### Bug Fixes

* update new dev tenant for mindfuel users ([#54](https://github.com/mindfuel/meta/issues/54)) ([3495f80](https://github.com/mindfuel/meta/commit/3495f80492b8247255d8320c6399f94e0916e0e8))
* use image from dev for cd dev ([#52](https://github.com/mindfuel/meta/issues/52)) ([a57edea](https://github.com/mindfuel/meta/commit/a57edea1c450d627e6402608be074c8ecb9e8c98))


### Features

* 🏄🏼 better routing and ux (DP-1430) ([#53](https://github.com/mindfuel/meta/issues/53)) ([245aaee](https://github.com/mindfuel/meta/commit/245aaee66ee1304a4c9fad8ccc20d3493c37fa35))

# [1.3.0](https://github.com/mindfuel/meta/compare/v1.2.2...v1.3.0) (2022-04-22)


### Features

* update gcp photourl in meta (DP-1292) ([#50](https://github.com/mindfuel/meta/issues/50)) ([3a81bcc](https://github.com/mindfuel/meta/commit/3a81bccb66f45f4684a14ac2df0afd574687f726))

## [1.2.2](https://github.com/mindfuel/meta/compare/v1.2.1...v1.2.2) (2022-04-13)


### Bug Fixes

* better error message and doc update ([#48](https://github.com/mindfuel/meta/issues/48)) ([2aeada1](https://github.com/mindfuel/meta/commit/2aeada1cec1c63261fd9361adc231297ef39dbb6))

## [1.2.1](https://github.com/mindfuel/meta/compare/v1.2.0...v1.2.1) (2022-04-11)


### Bug Fixes

* hide delete ([78e63ae](https://github.com/mindfuel/meta/commit/78e63ae038009d794d8c1aae25466ead70e8d0d2))

# [1.2.0](https://github.com/mindfuel/meta/compare/v1.1.1...v1.2.0) (2022-04-08)


### Features

* favicon added ([#47](https://github.com/mindfuel/meta/issues/47)) ([b53eb1d](https://github.com/mindfuel/meta/commit/b53eb1d4cc22eda5864d230ce78ac9e5bb98a9b5))

## [1.1.1](https://github.com/mindfuel/meta/compare/v1.1.0...v1.1.1) (2022-04-06)


### Bug Fixes

* add loading indicator when saving modals ([#43](https://github.com/mindfuel/meta/issues/43)) ([d5d1583](https://github.com/mindfuel/meta/commit/d5d1583085e48cb90ebebf3188ba7c0e4f3f9140))
* add toasts to login page and modals ([#42](https://github.com/mindfuel/meta/issues/42)) ([7f88a83](https://github.com/mindfuel/meta/commit/7f88a83793b3e219299a556e79e73eda9e15393b))
* change async data fetching to lazy ([#45](https://github.com/mindfuel/meta/issues/45)) ([706ca0c](https://github.com/mindfuel/meta/commit/706ca0c534fda518684847e0ca6a1404fae70849))
* update user button ([#44](https://github.com/mindfuel/meta/issues/44)) ([3eacccd](https://github.com/mindfuel/meta/commit/3eacccdbb924bdfa6aa2fa40aee219a1b4ca4f9e))

# [1.1.0](https://github.com/mindfuel/meta/compare/v1.0.0...v1.1.0) (2022-03-31)


### Bug Fixes

* dp-1240 fix docker image env ([#36](https://github.com/mindfuel/meta/issues/36)) ([832c602](https://github.com/mindfuel/meta/commit/832c60227d3fd7ddc71f819a7d412b3b0a8bf08f))
* dp-1241 slack webhook ([#37](https://github.com/mindfuel/meta/issues/37)) ([83cc3d2](https://github.com/mindfuel/meta/commit/83cc3d2b2f61123df99f3f1288813b7209f059ba))
* dp-1250 cd dev fix ([#39](https://github.com/mindfuel/meta/issues/39)) ([247df45](https://github.com/mindfuel/meta/commit/247df45448b5c040b4c7a0fca44f222dcbe11867))
* dp-1251 fix dev cd ([#40](https://github.com/mindfuel/meta/issues/40)) ([42289d1](https://github.com/mindfuel/meta/commit/42289d12a720ef6b7b3a70425611d73a203a4d27))
* typo in cd_prod ([#38](https://github.com/mindfuel/meta/issues/38)) ([da3a84e](https://github.com/mindfuel/meta/commit/da3a84efb2a481242e7ce2f4f7734f0572ae8e5c))


### Features

* 🚒 meta environment firebase config (DP-1252) ([#41](https://github.com/mindfuel/meta/issues/41)) ([11c294a](https://github.com/mindfuel/meta/commit/11c294a97f8ee3ca2d1760adc6fb12d7fbbf55ad))

# 1.0.0 (2022-03-29)


### Bug Fixes

* 🐛 change password ([#27](https://github.com/mindfuel/meta/issues/27)) ([d97cd63](https://github.com/mindfuel/meta/commit/d97cd63d971711a3fb619d241311dc1313191c52))
* add new user to firestore and save email lowercase ([#19](https://github.com/mindfuel/meta/issues/19)) ([9f4017a](https://github.com/mindfuel/meta/commit/9f4017a7fe0532121ed1d82fcc26969a71a26eb0))
* dp-1237 fixed cd_dev for deploy job ([#34](https://github.com/mindfuel/meta/issues/34)) ([afe25e5](https://github.com/mindfuel/meta/commit/afe25e550f775b718bfa2736039af547fa23bd2c))
* explicitly name firebase-admin app ([#8](https://github.com/mindfuel/meta/issues/8)) ([1a99f24](https://github.com/mindfuel/meta/commit/1a99f242146c050ebbe1f1ae02f906dd652d9078))
* handle when no email is provided ([#24](https://github.com/mindfuel/meta/issues/24)) ([238323f](https://github.com/mindfuel/meta/commit/238323fb65dda4cd4804750fe54356796c796912))
* hydration and vue warnings in prod mode ([#18](https://github.com/mindfuel/meta/issues/18)) ([1fd4268](https://github.com/mindfuel/meta/commit/1fd4268d13be253c036b9ac88345bd0bc4de3f87))
* logo loop ([1f339f4](https://github.com/mindfuel/meta/commit/1f339f43f12713730796c13bbbf191a43f964671))
* pipelines ([#28](https://github.com/mindfuel/meta/issues/28)) ([7adfd2e](https://github.com/mindfuel/meta/commit/7adfd2e5a32a5b5894b24320f77c8f78b124f549))
* small changes ([6c796b3](https://github.com/mindfuel/meta/commit/6c796b32a389239c034ded00399e730ba34f549b))
* small fixes ([#9](https://github.com/mindfuel/meta/issues/9)) ([fce90ca](https://github.com/mindfuel/meta/commit/fce90ca4c17f07d3e28993dca05646b9f789ac97))
* ui style ([#22](https://github.com/mindfuel/meta/issues/22)) ([38e8db5](https://github.com/mindfuel/meta/commit/38e8db5c58a2ebb91f2bd72785696cb442a2a372))


### Features

* ✨ vee-validate and cleanup scss ([#23](https://github.com/mindfuel/meta/issues/23)) ([6f3e96d](https://github.com/mindfuel/meta/commit/6f3e96d59fc49e61d88eedbb021ba474ed3ab572))
* 😶‍🌫️  cloud run deployment (DP-1154) ([#26](https://github.com/mindfuel/meta/issues/26)) ([1ce3c62](https://github.com/mindfuel/meta/commit/1ce3c62e7b179f53f8ddb848c892f8d441fe7f96))
* add backdrop to modals ([#17](https://github.com/mindfuel/meta/issues/17)) ([ca1600e](https://github.com/mindfuel/meta/commit/ca1600e3155c3b95dbf807596a49d1466af584d9))
* add deletion of users and tenants ([14980fe](https://github.com/mindfuel/meta/commit/14980fe336f3ca016883d09dba3d43d48e0a2e62))
* add docker and docker compose ([56a8125](https://github.com/mindfuel/meta/commit/56a81256b48151e1eb0ea66d5905859728f43530))
* add firebase login ([a3addce](https://github.com/mindfuel/meta/commit/a3addce3fd341c8951d8584703a848f9e38d0383))
* add firebase login ([9831efe](https://github.com/mindfuel/meta/commit/9831efe7526f7ea3bc2848008b1918d6ff5933e7))
* add firebase login ([ef4a235](https://github.com/mindfuel/meta/commit/ef4a23583b9d452679815c7f6bcfebd7b8159fac))
* add import of multiple users ([#21](https://github.com/mindfuel/meta/issues/21)) ([700b757](https://github.com/mindfuel/meta/commit/700b7575c409d226dda5334badb860fbdd2edad3))
* add logo to login ([#7](https://github.com/mindfuel/meta/issues/7)) ([9fc8959](https://github.com/mindfuel/meta/commit/9fc895973d22f8d6d6f0b78f2645169fff06a272))
* add meta claim (DP-1205) ([#30](https://github.com/mindfuel/meta/issues/30)) ([0353b33](https://github.com/mindfuel/meta/commit/0353b3323f53c182ef795ce19325c87ecb6e9b8e))
* add reactivity when data is added/changed ([#14](https://github.com/mindfuel/meta/issues/14)) ([72f8851](https://github.com/mindfuel/meta/commit/72f88514ff1550d2f01d252d8689836ce4908dc2))
* add tenant-switching ([#15](https://github.com/mindfuel/meta/issues/15)) ([53f9b88](https://github.com/mindfuel/meta/commit/53f9b88bfe2fe6fe1f10a68d5d17872492a4eb14))
* add update-claims endpoint ([6cfe4d9](https://github.com/mindfuel/meta/commit/6cfe4d94b639591fe5a262999a208169bb1de8a6))
* add updating user's password ([3499edf](https://github.com/mindfuel/meta/commit/3499edf5ff7d3b0b20e766a276a14edc1a037192))
* back button and dark mode ([#12](https://github.com/mindfuel/meta/issues/12)) ([1f295b8](https://github.com/mindfuel/meta/commit/1f295b8e23748cc08711a0d5139e67067cb469f5))
* button icons ([#13](https://github.com/mindfuel/meta/issues/13)) ([a47c174](https://github.com/mindfuel/meta/commit/a47c17468003691f9e71227603fd87e87377da69))
* docker compose ([449413a](https://github.com/mindfuel/meta/commit/449413a7a6044a199813fd414ce43e9e22aaa833))
* dp-1233 harmonize CD ([#33](https://github.com/mindfuel/meta/issues/33)) ([7d18136](https://github.com/mindfuel/meta/commit/7d18136ca9c58e10efb2e3c4251604fe2ecb80e6))
* eslint and prettier setup ([25856e1](https://github.com/mindfuel/meta/commit/25856e1aadff2af22ad8c89a3e4a6529a107ca15))
* initial setup ([d4d9a50](https://github.com/mindfuel/meta/commit/d4d9a500a6aca90cd454400b93f4d9d12bd2f53c))
* new setup with nuxt 3 ([782fc6e](https://github.com/mindfuel/meta/commit/782fc6edc85489f17456c5209fe950cd36dfe32d))
* polish pass ([#11](https://github.com/mindfuel/meta/issues/11)) ([0883237](https://github.com/mindfuel/meta/commit/08832379ea21ce287ecc6a87fd90463134e9d828))
* setup tailwind and style login ([84aa127](https://github.com/mindfuel/meta/commit/84aa1277d931d6f7df3ef6ed2f262af4c8309af2))
* use vee-validate ([#10](https://github.com/mindfuel/meta/issues/10)) ([291292f](https://github.com/mindfuel/meta/commit/291292f705012c584158ecd5b445a1cd2c601fa5))
* user and tenant endpoints ([#4](https://github.com/mindfuel/meta/issues/4)) ([02f1abe](https://github.com/mindfuel/meta/commit/02f1abef8a03748823d970b843300bc7a8ebe258))
