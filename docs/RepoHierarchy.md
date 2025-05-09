```yaml
shariahchain-ai/
├── README.md
├── docs/
│   └── quickstart.md
├── scripts/
│   └── seed-data.js
├── shared/
│   ├── utils/               # Common helpers (date formatting, validation)
│   ├── types/               # TypeScript interfaces / shared models
│   └── config/              # Single source of truth for env vars
├── backend/
│   ├── src/
│   │   ├── controllers/     # Express controllers (e.g. /contract, /reverse)
│   │   ├── services/        # Business logic (calls to AI, journal logic)
│   │   ├── routes/          # Express routes wiring controllers
│   │   ├── ai/              # Thin wrappers for external AI APIs (RAG, LLM, XAI)
│   │   ├── blockchain/      # Helpers for multisig & DAO interactions
│   │   ├── models/          # ORM definitions (e.g. Sequelize/TypeORM entities)
│   │   ├── middleware/      # Auth, error-handling, logging (Winston)
│   │   └── index.ts         # App entrypoint (Express + Swagger)
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── public/              # Static assets (logos, contracts templates)
    ├── src/
    │   ├── components/      # Reusable UI (Form, Table, ContractEditor)
    │   ├── pages/           # Views (Dashboard, ContractDraft, ReverseTx)
    │   ├── services/        # HTTP clients to backend APIs
    │   ├── stores/          # State management (Redux / Context)
    │   └── App.tsx          # Routes & layout
    ├── package.json
    └── tsconfig.json
```
