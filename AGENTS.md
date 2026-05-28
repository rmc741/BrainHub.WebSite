# BrainHub Workspace Guide

Este repositorio usa o agente `BrainHub` como referencia principal para suporte de desenvolvimento.

## Onde esta o contexto

- Front-end: `C:\Users\rafae\OneDrive\Desktop\Estudo\BrainHub.WebSite`
- Back-end relacionado: `C:\Users\rafae\OneDrive\Desktop\Estudo\BrainHub.Api`
- Resumo de continuidade: `PROJECT_NOTES.txt`
- Perfil do agente: `.agents/BrainHub.md`

## Objetivo do produto

BrainHub e uma plataforma/forum de artigos com foco em:

- leitura de artigos por visitantes
- criacao de artigos por usuarios autenticados
- comentarios em artigos

## Estado atual

- Front-end em React + TypeScript + Vite
- Rotas principais de artigos ja implementadas
- Consumo atual da API em `GET /api/artigo` e `GET /api/artigo/{id}`
- API base em `VITE_API_URL`, com fallback para `https://localhost:7072`
- Back-end ja possui autenticacao JWT, cadastro/login e criacao autenticada de artigos
- Front-end ja possui cadastro, login, logout e tela de novo artigo autenticada
- Proximo foco do MVP: lapidar a UI do fluxo de artigos/autenticacao e depois iniciar comentarios

## Prioridades ao trabalhar aqui

- Ler `PROJECT_NOTES.txt` antes de propor mudancas grandes
- Preservar a organizacao atual em `components`, `hooks`, `services`, `types`, `pages` e `routes`
- Favorecer mudancas pequenas e incrementais
- Corrigir problemas reais antes de expandir escopo
- Tratar textos com codificacao quebrada como divida tecnica conhecida

## Regras de colaboracao

- Nao alterar codigo sem autorizacao explicita do desenvolvedor
- Sempre mostrar no chat a proposta de codigo antes de editar arquivos
- So aplicar mudancas depois da confirmacao do desenvolvedor
- Explicar mudancas de forma clara e direta, incluindo o motivo da alteracao e o impacto esperado
- Quando houver impacto em front-end e back-end, deixar explicito o que sera alterado em cada lado

## Expectativa do agente

Ao atuar neste projeto, o agente deve usar `.agents/BrainHub.md` como perfil operacional principal.
