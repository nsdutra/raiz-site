// cookie-banner.js — Raiz Patrimônio · Aviso de cookies/privacidade
// v1.0 · 30/08/2026
//
// Pedido explícito do Nicola (frente de conformidade LGPD). Investigação real
// do código da landing (trackEvento(), obterSessaoId()) confirmou: hoje NÃO
// há cookie de terceiro (sem Google Analytics, sem Meta Pixel) — só um
// identificador de sessão em sessionStorage (dura só enquanto a aba está
// aberta), usado pra agrupar eventos da mesma visita em comercial.eventos_landing.
// Por isso o aviso é informativo, não um banner de "aceitar categorias" — não
// há cookie de propaganda pra consentir. Se um dia entrar uma ferramenta de
// terceiro, este arquivo precisa virar um banner de consentimento de verdade
// (com opção de recusar antes do script carregar) — ver Política de
// Privacidade §9.
//
// Carregado em TODAS as páginas do raiz-site (index.html + as 3 páginas
// legais) — arquivo único, pra não duplicar o texto em 4 lugares.
(function () {
    var CHAVE = 'raiz_aviso_privacidade_visto';
    try {
        if (localStorage.getItem(CHAVE)) return;
    } catch (e) {
        return; // localStorage indisponível (modo privado restritivo etc.) — não trava a página
    }

    var b = document.createElement('div');
    b.id = 'raiz-aviso-privacidade';
    b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:999;background:#152a24;color:#e8e6de;padding:14px 20px;font-family:Inter,system-ui,sans-serif;font-size:13px;line-height:1.5;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;box-shadow:0 -8px 24px rgba(0,0,0,.15)';
    b.innerHTML =
        '<span style="max-width:640px">Usamos apenas um identificador de sessão (não é cookie de terceiro — dura só enquanto sua aba está aberta) pra entender de onde vêm nossos visitantes. Sem Google Analytics, sem Meta Pixel. ' +
        '<a href="/politica-de-privacidade#9-cookies-e-rastreamento-na-landing-page" style="color:#c68a3b;font-weight:700;text-decoration:underline">Saiba mais</a></span>' +
        '<button id="raiz-aviso-ok" type="button" style="border:0;border-radius:8px;background:#c68a3b;color:#152a24;font-weight:800;padding:8px 16px;cursor:pointer;white-space:nowrap;font-size:13px">Entendi</button>';

    document.body.appendChild(b);
    document.getElementById('raiz-aviso-ok').onclick = function () {
        try { localStorage.setItem(CHAVE, '1'); } catch (e) {}
        b.remove();
    };
})();
