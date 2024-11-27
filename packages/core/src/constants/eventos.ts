import { Evento } from '../evento'

const eventos: Evento[] = [
    {
        id: "46a2a22d-2659-4a67-b7f8-a4958b702005",
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        listaDeConvidados: [
            {
                id: "e6e48a55-239e-4cde-862e-05476d64e2cc",
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "bd6c3d84-e0fc-4d0f-b786-41cea4c86b7c",
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "7582ceb8-55e2-436a-ae38-5f5c91344300",
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: "63343463-acf5-49bb-a23b-ec21e9533202",
        alias: 'evento-js-avancado',
        senha: 'js2024',
        nome: 'Workshop Avançado de JavaScript',
        data: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        descricao: 'Um workshop avançado para programadores JavaScript.',
        imagem: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imagemBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicoEsperado: 100,
        listaDeConvidados: [
            {
                id: "dde05319-df76-4f2b-81ac-656e4101e601",
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "62b40c83-3103-4bdd-93bf-ffd07118048c",
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: "39c02e3e-6198-4747-8603-a9fe6ecad5b0",
        alias: 'evento-dev-frontend',
        senha: 'front123',
        nome: 'Bootcamp de Desenvolvimento Frontend',
        data: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
        imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imagemBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicoEsperado: 150,
        listaDeConvidados: [
            {
                id: "0e24a77c-ac9a-4f05-9325-b9d4a522149d",
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "62c95038-0890-4d00-b96a-5d6db0ea510b",
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "64fc622f-2df1-4e1b-b133-341a16e64e9e",
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "6c3eeee2-c11c-4a96-ab0c-7ba66d299c97",
        alias: 'casamento-alberto-marina',
        senha: 'casamento2024',
        nome: 'Casamento do Alberto e Marina',
        data: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        descricao:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imagemBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicoEsperado: 150,
        listaDeConvidados: [
            {
                id: "b82d2432-a6ca-430f-bf4a-c4a25114e3e9",
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "9da70b24-20eb-4935-8fc6-6d291a69d1d9",
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "72a24948-e02d-4338-b75c-1ed47663d3b4",
        alias: 'aniversario-joao',
        senha: 'joao2024',
        nome: 'Aniversário do João - 30 Anos',
        data: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        descricao:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        imagem: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imagemBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicoEsperado: 80,
        listaDeConvidados: [
            {
                id: "18c75911-de77-4112-83a4-7b520af2acbc",
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: "18c75911-de77-4112-83a4-7b520af2acbc",
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "8598adb9-12ec-48a1-bbe5-d784ff9129aa",
        alias: 'inauguracao-loja-estrela',
        senha: 'estrela2024',
        nome: 'Inauguração da Loja Estrela',
        data: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        descricao:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imagemBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicoEsperado: 300,
        listaDeConvidados: [
            {
                id: "340265e2-a816-42dc-85a1-c1b776832bf6",
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: "e9c58ec0-88ee-46dc-83bd-793a0f142a42",
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "418b5b72-5de8-4dbb-86e7-655ac887de72",
        alias: 'reuniao-familia-oliveira',
        senha: 'familia2024',
        nome: 'Reunião da Família Oliveira',
        data: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        descricao: 'Reunião de fim de ano da família Oliveira.',
        imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imagemBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicoEsperado: 50,
        listaDeConvidados: [
            {
                id: "685beade-8f52-4677-99ea-0d2b7df911ce",
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: "5e23b09e-cf37-4afd-8d85-b74cf9c21be1",
                nome: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
]

export default eventos

function verificar() {

    const tmpArray:string[] = []
    
    eventos.forEach((evento) => {
        
        //const listaIdConvidados:string[] = evento.listaDeConvidados.map((convidado) => convidado.id)
        tmpArray.push(evento.id)
    })
    
    const duplicados = tmpArray.reduce((acc:string[], value:string, index:number, array:string[]) => {
        if(array.indexOf(value) !== index) {
            acc.push(value)
        }
        return acc
    }, [])

    return duplicados
}

//console.log(verificar())

function achar(id:string):Evento | string {
    return (eventos.find(( evento )=> evento.id === id) ?? 'Não Achei')
}

//console.log(achar("72a24948-e02d-4338-b75c-1ed47663d3b4"))

