import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.51d6c45b.js";const o="/img/blobstream/Blobstream.png",i="/img/blobstream/blobstream-orchestrator.png",s="/img/blobstream/blobstream-relayer.png",y=JSON.parse('{"title":"Blobstream","description":"An overview of Blobstream.","frontmatter":{"description":"An overview of Blobstream.","head":[["meta",{"name":"og:title","content":"Blobstream | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-intro.md","filePath":"nodes/blobstream-intro.md","lastUpdated":1698417238000}'),l={name:"nodes/blobstream-intro.md"},n=r('<h1 id="blobstream" tabindex="-1">Blobstream <a class="header-anchor" href="#blobstream" aria-label="Permalink to &quot;Blobstream&quot;">​</a></h1><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> allows Ethereum developers to build high-throughput L2s using Celestia, the first DA layer with Data Availability Sampling.</p><p>This page and following tutorials will go over Blobstream and how validators on Celestia can run it.</p><p>If you&#39;re looking to learn more, you can view <a href="https://github.com/celestiaorg/orchestrator-relayer" target="_blank" rel="noreferrer">the <code>orchestrator-relayer</code> repository</a>, and <a href="https://github.com/celestiaorg/blobstream-contracts#how-it-works" target="_blank" rel="noreferrer">read more about Blobstream</a>.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Blobstream, consists of two components: an <a href="./blobstream-orchestrator">orchestrator</a> and a <a href="./blobstream-relayer">relayer</a>.</p><p>In the following diagram, we show how a layer 2 would post data to Celestia and then verify that it was published in the target EVM chain.</p><p><img src="'+o+'" alt="Blobstream-Architecture"></p><p>In fact, data will first be attested to by the Celestia validator set, <em>i.e.</em> signing commitments committing to the data. Then, these signatures will be relayed to the target EVM chain (in this case, Ethereum). Finally, the layer 2, or any party, will be able to verify that the data was published to Celestia directly on the EVM chain on the Blobstream smart contract. You can reference <a href="https://github.com/celestiaorg/blobstream-contracts/blob/master/src/Blobstream.sol" target="_blank" rel="noreferrer">the Blobstream smart contract</a>.</p><p>The specification of Blobstream <code>Valset</code>s, which track the Celestia validator set changes, can be found in <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-002-qgb-valset.md" target="_blank" rel="noreferrer">ADR 002</a>.</p><p>Blobstream data commitments, which represent commitments over sets of blocks defined by a data commitment window, are discussed more in-depth in <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-003-qgb-data-commitments.md" target="_blank" rel="noreferrer">ADR 003</a>.</p><p>The orchestrator is part of the validator setup and works as follows:</p><ul><li>Celestia App: creates an attestation on the state machine level that needs to be signed</li><li>The orchestrator: queries the attestation, signs it, then submits the signature to the Blobstream P2P network</li></ul><p>The diagram below goes over this process.</p><p><img src="'+i+'" alt="Blobstream-Orchestrator"></p><p>The relayer submits the attestations&#39; signatures from the Blobstream P2P network to the target EVM chain.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the contract is still not deployed, then it needs to be deployed before its used by the relayer. Check the <a href="./blobstream-deploy">deployment documentation</a> for more details.</p></div><p>The diagram below goes over this process.</p><p><img src="'+s+'" alt="Blobstream-Relayer"></p><p>You can learn more about the mechanics behind the relayer in <a href="https://github.com/celestiaorg/celestia-app/blob/main/docs/architecture/adr-004-qgb-relayer-security.md" target="_blank" rel="noreferrer">ADR 004</a>.</p><h2 id="blobstream-and-data-availability-committees-dacs" tabindex="-1">Blobstream and data availability committees (DACs) <a class="header-anchor" href="#blobstream-and-data-availability-committees-dacs" aria-label="Permalink to &quot;Blobstream and data availability committees (DACs)&quot;">​</a></h2><h3 id="decentralization-and-security" tabindex="-1">Decentralization and security <a class="header-anchor" href="#decentralization-and-security" aria-label="Permalink to &quot;Decentralization and security&quot;">​</a></h3><p>Blobstream is built on Celestia, which uses a CometBFT-based proof-of-stake system. An incorrect data availability attestation in this system will ultimately be penalized (currently not implemented), ensuring validators act in good faith. Thus, Blobstream shares the same security assumptions as Celestia. In contrast, data availability committees (DACs), are typically centralized or semi-centralized, relying on a specific set of entities or individuals to vouch for data availability.</p><h3 id="mechanism-of-verification" tabindex="-1">Mechanism of verification <a class="header-anchor" href="#mechanism-of-verification" aria-label="Permalink to &quot;Mechanism of verification&quot;">​</a></h3><p>Blobstream uses data availability attestations, which are Merkle roots of the batched L2 data, to confirm that the necessary data is present on Celestia. The L2 contract on Ethereum can check directly with Blobstream if the data is published on Celestia. Similarly, a DAC would rely on attestations or confirmations from its permissioned members.</p><h3 id="flexibility-and-scalability" tabindex="-1">Flexibility and scalability <a class="header-anchor" href="#flexibility-and-scalability" aria-label="Permalink to &quot;Flexibility and scalability&quot;">​</a></h3><p>Blobstream is designed to offer high-throughput data availability for Ethereum L2s, aiming to strike a balance between scalability and security. It operates independently of Ethereum&#39;s gas costs, as Celestia&#39;s resource pricing is more byte-focused rather than computation-centric. On the other hand, the scalability and flexibility of a DAC would depend on its specific design and implementation.</p><p>In summary, both Blobstream and DACs aim to ensure offchain data availability, but Blobstream offers a more decentralized, secure, and scalable solution compared to the potential centralized nature of DACs.</p><h2 id="setting-up-blobstream" tabindex="-1">Setting up Blobstream <a class="header-anchor" href="#setting-up-blobstream" aria-label="Permalink to &quot;Setting up Blobstream&quot;">​</a></h2><p>The following sections in this category presume you have the following setup:</p><ul><li>A celestia-app <a href="./consensus-node#optional-setting-up-a-validator">validator node</a> running</li></ul><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><ol><li><a href="./blobstream-binary">Install the binary</a></li><li><a href="./blobstream-orchestrator">Orchestrator</a></li><li><a href="./blobstream-keys">Key management</a></li><li><a href="./blobstream-relayer">Relayer</a></li><li><a href="./blobstream-deploy">Deploy the Blobstream contract</a></li></ol>',33),c=[n];function h(m,b,d,p,u,f){return t(),a("div",null,c)}const v=e(l,[["render",h]]);export{y as __pageData,v as default};
