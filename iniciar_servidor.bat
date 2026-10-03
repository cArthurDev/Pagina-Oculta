@echo off
title Servidor - Pagina Oculta
color 0A

echo ===================================================
echo     INICIANDO SERVIDOR LOCAL - PAGINA OCULTA
echo ===================================================
echo.
echo Tentando iniciar via Python...
python -m http.server 8080

if %errorlevel% neq 0 (
    echo.
    echo [!] Python nao encontrado. Tentando usar Node (npx serve)...
    npx serve . -p 8080
    
    if %errorlevel% neq 0 (
        echo.
        echo [X] ERRO: Nenhuma ferramenta de servidor encontrada.
        echo Por favor, instale o Python ou o Node.js no seu computador.
    )
)

pause
