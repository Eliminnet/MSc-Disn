<div align="center">

# MSc Project

**In-Class Q&A System**

<img src="./frontend/public/home.svg" width="400" />

</div>

---

|  Layer   |   Technology   |
| :------: | :------------: |
| Frontend | `React + Vite` |
| Backend  |    `NestJS`    |

| Variable |   Default   | Meaning                                          |   Type   |
| :------: | :---------: | :----------------------------------------------- | :------: |
|  `HOST`  | `localhost` | The **IP address** that the backend will bind to | `string` |
|  `PORT`  |   `3000`    | The **port** that the backend wil bind to        | `number` |

## How to Run

While there are helper scripts (`./dev.sh` & `./prod.sh`) in the root directory, if you would rather run them manually or with specific parameters, this can be done using the commands below.

|  Layer   |                                Commands                                 |                          Notes                          |
| :------: | :---------------------------------------------------------------------: | :-----------------------------------------------------: |
| Frontend |     Dev: `npm run dev`<br>Build: `npm run build && npm run preview`     | Use `npm run dev -- --host` to expose dev server on LAN |
| Backend  | Dev: `npm run start:dev`<br>Prod: `npm run build && npm run start:prod` |                                                         |
