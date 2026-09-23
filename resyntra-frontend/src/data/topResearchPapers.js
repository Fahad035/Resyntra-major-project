export const CATEGORY_COLORS = {
  "Machine Learning": "#22d3ee",
  "Natural Language Processing": "#a78bfa",
  "Computer Vision": "#34d399",
  "Robotics & Reinforcement Learning": "#fb923c",
  "Large Language Models": "#f472b6",
  "Quantum Computing": "#818cf8",
  "Computational Biology": "#4ade80",
  Neuroscience: "#f87171",
  "Climate & Earth Science": "#38bdf8",
  "Cybersecurity & Privacy": "#fbbf24",
  "Mathematics & Theory": "#c084fc",
  "Physics & Economics": "#2dd4bf",
};

export const CATEGORIES = Object.keys(CATEGORY_COLORS);

let uid = 0;
const paper = (data) => {
  uid += 1;
  return {
    id: `top-${String(uid).padStart(3, "0")}`,
    pages: 12,
    sizeMB: 1.4,
    readTime: 8,
    trending: false,
    tags: [],
    ...data,
  };
};

export const TOP_RESEARCH_PAPERS = [
  // ---------------------------------------------------------------- ML ----
  paper({
    title: "Attention Is All You Need",
    authors: "Vaswani, Shazeer, Parmar et al.",
    year: 2017,
    venue: "NeurIPS",
    field: "Machine Learning",
    citations: 128000,
    pages: 15,
    sizeMB: 2.1,
    trending: true,
    tags: ["transformers", "self-attention", "sequence models"],
    summary:
      "Introduced the Transformer architecture, replacing recurrence with self-attention and reshaping nearly every modern AI system.",
  }),
  paper({
    title: "Deep Residual Learning for Image Recognition",
    authors: "He, Zhang, Ren, Sun",
    year: 2016,
    venue: "CVPR",
    field: "Machine Learning",
    citations: 189000,
    tags: ["resnet", "deep networks", "image classification"],
    summary:
      "Proposed residual connections that let networks with hundreds of layers train reliably, unlocking today's deep vision backbones.",
  }),
  paper({
    title: "Adam: A Method for Stochastic Optimization",
    authors: "Kingma, Ba",
    year: 2015,
    venue: "ICLR",
    field: "Machine Learning",
    citations: 156000,
    tags: ["optimization", "training", "gradient descent"],
    summary:
      "Presented the Adam optimizer, combining adaptive learning rates with momentum to make large-scale training fast and stable.",
  }),
  paper({
    title: "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
    authors: "Srivastava, Hinton, Krizhevsky et al.",
    year: 2014,
    venue: "JMLR",
    field: "Machine Learning",
    citations: 41000,
    tags: ["regularization", "generalization"],
    summary:
      "Showed that randomly dropping units during training acts as implicit model averaging, cutting overfitting across architectures.",
  }),
  paper({
    title: "Batch Normalization: Accelerating Deep Network Training",
    authors: "Ioffe, Szegedy",
    year: 2015,
    venue: "ICML",
    field: "Machine Learning",
    citations: 47000,
    tags: ["normalization", "training stability"],
    summary:
      "Normalizing layer inputs during training was shown to smooth optimization landscapes and let networks use far higher learning rates.",
  }),
  paper({
    title: "Generative Adversarial Networks",
    authors: "Goodfellow, Pouget-Abadie, Mirza et al.",
    year: 2014,
    venue: "NeurIPS",
    field: "Machine Learning",
    citations: 62000,
    tags: ["generative models", "GANs"],
    summary:
      "Framed generation as a two-player game between a generator and discriminator, founding an entire family of generative modelling.",
  }),
 
  // --------------------------------------------------------------- NLP ----
  paper({
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Devlin, Chang, Lee, Toutanova",
    year: 2019,
    venue: "NAACL",
    field: "Natural Language Processing",
    citations: 98000,
    trending: true,
    tags: ["pretraining", "bidirectional", "NLU"],
    summary:
      "Pre-trained deep bidirectional representations from unlabeled text, setting new state-of-the-art results across eleven NLP tasks.",
  }),
  paper({
    title: "Language Models are Few-Shot Learners",
    authors: "Brown, Mann, Ryder et al.",
    year: 2020,
    venue: "NeurIPS",
    field: "Natural Language Processing",
    citations: 41000,
    trending: true,
    tags: ["GPT-3", "few-shot", "scaling laws"],
    summary:
      "Scaling an autoregressive language model to 175B parameters produced strong few-shot performance without task-specific fine-tuning.",
  }),
  paper({
    title: "Efficient Estimation of Word Representations in Vector Space",
    authors: "Mikolov, Chen, Corrado, Dean",
    year: 2013,
    venue: "ICLR Workshop",
    field: "Natural Language Processing",
    citations: 39000,
    tags: ["word2vec", "embeddings"],
    summary:
      "Introduced word2vec, learning dense word embeddings that capture linear semantic and syntactic relationships from raw text.",
  }),
  paper({
    title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    authors: "Raffel, Shazeer, Roberts et al.",
    year: 2020,
    venue: "JMLR",
    field: "Natural Language Processing",
    citations: 14500,
    tags: ["T5", "transfer learning"],
    summary:
      "Reframed every NLP task as text-to-text and systematically studied transfer learning choices at scale, producing the T5 model family.",
  }),
  paper({
    title: "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
    authors: "Liu, Ott, Goyal et al.",
    year: 2019,
    venue: "arXiv",
    field: "Natural Language Processing",
    citations: 18000,
    tags: ["pretraining", "ablation study"],
    summary:
      "Re-examined BERT's pretraining recipe and showed longer training on more data with tuned hyperparameters substantially improves results.",
  }),
  paper({
    title: "Training Language Models to Follow Instructions with Human Feedback",
    authors: "Ouyang, Wu, Jiang et al.",
    year: 2022,
    venue: "NeurIPS",
    field: "Natural Language Processing",
    citations: 9200,
    trending: true,
    tags: ["InstructGPT", "RLHF", "alignment"],
    summary:
      "Fine-tuned GPT-3 with human feedback so outputs better follow user intent, the recipe behind the first instruction-tuned chat models.",
  }),
 
  // ----------------------------------------------------------------- CV ----
  paper({
    title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors: "Dosovitskiy, Beyer, Kolesnikov et al.",
    year: 2021,
    venue: "ICLR",
    field: "Computer Vision",
    citations: 42000,
    trending: true,
    tags: ["vision transformer", "ViT"],
    summary:
      "Applied a pure Transformer directly to image patches, matching or beating convolutional networks when pretrained on enough data.",
  }),
  paper({
    title: "You Only Look Once: Unified, Real-Time Object Detection",
    authors: "Redmon, Divvala, Girshick, Farhadi",
    year: 2016,
    venue: "CVPR",
    field: "Computer Vision",
    citations: 51000,
    tags: ["YOLO", "object detection", "real-time"],
    summary:
      "Reframed detection as a single regression problem, enabling real-time object detection in one pass through the network.",
  }),
  paper({
    title: "U-Net: Convolutional Networks for Biomedical Image Segmentation",
    authors: "Ronneberger, Fischer, Brox",
    year: 2015,
    venue: "MICCAI",
    field: "Computer Vision",
    citations: 74000,
    tags: ["segmentation", "medical imaging"],
    summary:
      "An encoder-decoder with skip connections that became the default architecture for pixel-accurate biomedical image segmentation.",
  }),
  paper({
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford, Kim, Hallacy et al.",
    year: 2021,
    venue: "ICML",
    field: "Computer Vision",
    citations: 22000,
    trending: true,
    tags: ["CLIP", "multimodal", "zero-shot"],
    summary:
      "Trained on image-text pairs at scale, CLIP learns visual concepts from language supervision and transfers zero-shot to new tasks.",
  }),
  paper({
    title: "Segment Anything",
    authors: "Kirillov, Mintun, Ravi et al.",
    year: 2023,
    venue: "ICCV",
    field: "Computer Vision",
    citations: 6800,
    trending: true,
    tags: ["segmentation", "foundation model"],
    summary:
      "Built a promptable segmentation model and a data engine that produced the largest segmentation dataset to date, generalizing zero-shot.",
  }),
  paper({
    title: "High-Resolution Image Synthesis with Latent Diffusion Models",
    authors: "Rombach, Blattmann, Lorenz, Esser, Ommer",
    year: 2022,
    venue: "CVPR",
    field: "Computer Vision",
    citations: 12500,
    trending: true,
    tags: ["diffusion", "image generation", "Stable Diffusion"],
    summary:
      "Ran the diffusion process in a compressed latent space rather than pixel space, making high-fidelity image generation dramatically cheaper.",
  }),
 
  // --------------------------------------------------------- RL/Robotics ----
  paper({
    title: "Mastering the Game of Go with Deep Neural Networks and Tree Search",
    authors: "Silver, Huang, Maddison et al.",
    year: 2016,
    venue: "Nature",
    field: "Robotics & Reinforcement Learning",
    citations: 16500,
    tags: ["AlphaGo", "self-play", "MCTS"],
    summary:
      "Combined deep networks with Monte Carlo tree search to defeat a professional Go player, a milestone once thought a decade away.",
  }),
  paper({
    title: "Human-Level Control Through Deep Reinforcement Learning",
    authors: "Mnih, Kavukcuoglu, Silver et al.",
    year: 2015,
    venue: "Nature",
    field: "Robotics & Reinforcement Learning",
    citations: 20200,
    tags: ["DQN", "Atari", "value learning"],
    summary:
      "The Deep Q-Network learned to play dozens of Atari games directly from pixels, matching human-level performance from raw sensory input.",
  }),
  paper({
    title: "Proximal Policy Optimization Algorithms",
    authors: "Schulman, Wolski, Dhariwal, Radford, Klimov",
    year: 2017,
    venue: "arXiv",
    field: "Robotics & Reinforcement Learning",
    citations: 18800,
    tags: ["PPO", "policy gradient"],
    summary:
      "A simpler, more stable policy-gradient objective that became the default reinforcement learning algorithm across robotics and RLHF.",
  }),
  paper({
    title: "Deep Reinforcement Learning from Human Preferences",
    authors: "Christiano, Leike, Brown et al.",
    year: 2017,
    venue: "NeurIPS",
    field: "Robotics & Reinforcement Learning",
    citations: 4300,
    tags: ["RLHF", "preference learning"],
    summary:
      "Trained agents from pairwise human preferences instead of hand-crafted rewards, laying the groundwork for RLHF in language models.",
  }),
  paper({
    title: "Soft Actor-Critic: Off-Policy Maximum Entropy Deep RL",
    authors: "Haarnoja, Zhou, Abbeel, Levine",
    year: 2018,
    venue: "ICML",
    field: "Robotics & Reinforcement Learning",
    citations: 8600,
    tags: ["actor-critic", "continuous control"],
    summary:
      "An entropy-regularized actor-critic method that greatly improved sample efficiency and stability for continuous-control robotics.",
  }),
 
  // ------------------------------------------------------------- LLMs ----
  paper({
    title: "LLaMA: Open and Efficient Foundation Language Models",
    authors: "Touvron, Lavril, Izacard et al.",
    year: 2023,
    venue: "arXiv",
    field: "Large Language Models",
    citations: 8900,
    trending: true,
    tags: ["open weights", "efficient training"],
    summary:
      "Showed that smaller models trained on far more tokens can match much larger ones, favoring inference efficiency over raw parameter count.",
  }),
  paper({
    title: "PaLM: Scaling Language Modeling with Pathways",
    authors: "Chowdhery, Narang, Devlin et al.",
    year: 2022,
    venue: "arXiv",
    field: "Large Language Models",
    citations: 5200,
    tags: ["scaling", "pathways system"],
    summary:
      "Trained a 540B-parameter model across TPU pods with the Pathways system, revealing new emergent abilities at scale.",
  }),
  paper({
    title: "Training Compute-Optimal Large Language Models",
    authors: "Hoffmann, Borgeaud, Mensch et al.",
    year: 2022,
    venue: "arXiv",
    field: "Large Language Models",
    citations: 3400,
    tags: ["Chinchilla", "scaling laws"],
    summary:
      "Derived compute-optimal scaling laws showing most large language models of the time were significantly under-trained on data.",
  }),
  paper({
    title: "Constitutional AI: Harmlessness from AI Feedback",
    authors: "Bai, Kadavath, Kundu et al.",
    year: 2022,
    venue: "arXiv",
    field: "Large Language Models",
    citations: 2100,
    tags: ["alignment", "self-critique"],
    summary:
      "Used a written set of principles and AI-generated feedback, instead of only human labels, to train a more harmless assistant.",
  }),
  paper({
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context",
    authors: "Dai, Yang, Yang et al.",
    year: 2019,
    venue: "ACL",
    field: "Large Language Models",
    citations: 4700,
    tags: ["long context", "segment recurrence"],
    summary:
      "Introduced segment-level recurrence and relative positional encoding, letting Transformers model dependencies far beyond a fixed window.",
  }),
 
  // --------------------------------------------------------- Quantum ----
  paper({
    title: "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
    authors: "Shor",
    year: 1997,
    venue: "SIAM Journal on Computing",
    field: "Quantum Computing",
    citations: 14200,
    tags: ["Shor's algorithm", "factoring"],
    summary:
      "Showed a quantum computer could factor large integers exponentially faster than any known classical algorithm, unsettling RSA cryptography.",
  }),
  paper({
    title: "A Fast Quantum Mechanical Algorithm for Database Search",
    authors: "Grover",
    year: 1996,
    venue: "STOC",
    field: "Quantum Computing",
    citations: 9800,
    tags: ["Grover's algorithm", "search"],
    summary:
      "Introduced a quantum search algorithm giving a quadratic speed-up over classical search of an unsorted database.",
  }),
  paper({
    title: "Quantum Supremacy Using a Programmable Superconducting Processor",
    authors: "Arute, Arya, Babbush et al.",
    year: 2019,
    venue: "Nature",
    field: "Quantum Computing",
    citations: 6100,
    trending: true,
    tags: ["Sycamore", "quantum advantage"],
    summary:
      "Google's Sycamore processor completed a sampling task in 200 seconds that the authors estimated would take a supercomputer millennia.",
  }),
  paper({
    title: "Surface Codes: Towards Practical Large-Scale Quantum Computation",
    authors: "Fowler, Mariantoni, Martinis, Cleland",
    year: 2012,
    venue: "Physical Review A",
    field: "Quantum Computing",
    citations: 5400,
    tags: ["error correction", "fault tolerance"],
    summary:
      "Laid out how surface codes could achieve fault-tolerant quantum computation using only nearest-neighbour qubit interactions.",
  }),
  paper({
    title: "Quantum Machine Learning",
    authors: "Biamonte, Wittek, Pancotti et al.",
    year: 2017,
    venue: "Nature",
    field: "Quantum Computing",
    citations: 4300,
    tags: ["QML", "survey"],
    summary:
      "Surveyed the emerging intersection of quantum computing and machine learning, mapping out near-term algorithmic opportunities.",
  }),
 
  // -------------------------------------------------------- Comp Bio ----
  paper({
    title: "Highly Accurate Protein Structure Prediction with AlphaFold",
    authors: "Jumper, Evans, Pritzel et al.",
    year: 2021,
    venue: "Nature",
    field: "Computational Biology",
    citations: 24500,
    trending: true,
    tags: ["AlphaFold", "protein folding"],
    summary:
      "AlphaFold2 predicted protein 3-D structures with near-experimental accuracy, resolving a fifty-year-old grand challenge in biology.",
  }),
  paper({
    title: "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity",
    authors: "Jinek, Chylinski, Fonfara, Hauer, Doudna, Charpentier",
    year: 2012,
    venue: "Science",
    field: "Computational Biology",
    citations: 13200,
    tags: ["CRISPR-Cas9", "gene editing"],
    summary:
      "Repurposed a bacterial immune mechanism into a programmable DNA-cutting tool, launching the modern era of precision gene editing.",
  }),
  paper({
    title: "Initial Sequencing and Analysis of the Human Genome",
    authors: "Lander, Linton, Birren et al.",
    year: 2001,
    venue: "Nature",
    field: "Computational Biology",
    citations: 22800,
    tags: ["genomics", "human genome project"],
    summary:
      "Published the first draft sequence and analysis of the human genome, reshaping biomedical research for the following two decades.",
  }),
  paper({
    title: "Massively Parallel Digital Transcriptional Profiling of Single Cells",
    authors: "Zheng, Terry, Belgrader et al.",
    year: 2017,
    venue: "Nature Communications",
    field: "Computational Biology",
    citations: 9700,
    tags: ["single-cell RNA-seq", "genomics"],
    summary:
      "Described a droplet-based method for profiling gene expression in tens of thousands of individual cells in a single run.",
  }),
  paper({
    title: "mRNA Vaccines — A New Era in Vaccinology",
    authors: "Pardi, Hogan, Porter, Weissman",
    year: 2018,
    venue: "Nature Reviews Drug Discovery",
    field: "Computational Biology",
    citations: 7600,
    trending: true,
    tags: ["mRNA vaccines", "immunology"],
    summary:
      "Reviewed the design principles behind mRNA vaccine platforms years before they underpinned the fastest vaccine rollout in history.",
  }),
  paper({
    title: "Hallmarks of Cancer: The Next Generation",
    authors: "Hanahan, Weinberg",
    year: 2011,
    venue: "Cell",
    field: "Computational Biology",
    citations: 41300,
    tags: ["oncology", "review"],
    summary:
      "Updated a widely cited framework describing the shared biological capabilities that tumour cells acquire during malignant progression.",
  }),
 
  // ------------------------------------------------------- Neuroscience ----
  paper({
    title: "The Hippocampus as a Spatial Map",
    authors: "O'Keefe, Nadel",
    year: 1978,
    venue: "Oxford University Press",
    field: "Neuroscience",
    citations: 9800,
    tags: ["place cells", "spatial memory"],
    summary:
      "Proposed that the hippocampus builds a cognitive map of space, a theory later confirmed by the discovery of place cells.",
  }),
  paper({
    title: "Microstructure of a Spatial Map in the Entorhinal Cortex",
    authors: "Hafting, Fyhn, Molden, Moser, Moser",
    year: 2005,
    venue: "Nature",
    field: "Neuroscience",
    citations: 5900,
    tags: ["grid cells", "spatial navigation"],
    summary:
      "Discovered grid cells that fire in a hexagonal spatial pattern, revealing the brain's built-in coordinate system for navigation.",
  }),
  paper({
    title: "The Brain's Default Mode Network",
    authors: "Raichle",
    year: 2015,
    venue: "Annual Review of Neuroscience",
    field: "Neuroscience",
    citations: 6400,
    tags: ["default mode network", "resting state"],
    summary:
      "Reviewed two decades of evidence for a brain network active during rest that underlies self-referential thought and mind-wandering.",
  }),
  paper({
    title: "The Human Connectome Project: A Data Acquisition Perspective",
    authors: "Van Essen, Ugurbil, Auerbach et al.",
    year: 2012,
    venue: "NeuroImage",
    field: "Neuroscience",
    citations: 4200,
    tags: ["connectome", "brain mapping"],
    summary:
      "Outlined the imaging protocols behind an open dataset mapping structural and functional brain connections across hundreds of subjects.",
  }),
  paper({
    title: "Performance-Optimized Hierarchical Models Predict Neural Responses in Higher Visual Cortex",
    authors: "Yamins, Hong, Cadieu et al.",
    year: 2014,
    venue: "PNAS",
    field: "Neuroscience",
    citations: 3300,
    tags: ["deep learning", "visual cortex"],
    summary:
      "Showed that deep networks optimized for object recognition also predict neural activity in the primate visual cortex remarkably well.",
  }),
 
  // ------------------------------------------------------------ Climate ----
  paper({
    title: "IPCC Sixth Assessment Report: Climate Change 2021 — The Physical Science Basis",
    authors: "IPCC Working Group I",
    year: 2021,
    venue: "IPCC",
    field: "Climate & Earth Science",
    citations: 15600,
    trending: true,
    tags: ["climate assessment", "policy"],
    summary:
      "The most comprehensive scientific assessment to date, confirming unequivocal human influence on the warming of the atmosphere and oceans.",
  }),
  paper({
    title: "Atmospheric Carbon Dioxide Variations at Mauna Loa Observatory",
    authors: "Keeling",
    year: 1976,
    venue: "Tellus",
    field: "Climate & Earth Science",
    citations: 5100,
    tags: ["Keeling curve", "CO2 record"],
    summary:
      "Established the continuous atmospheric CO2 record whose steady rise became the defining chart of the climate change era.",
  }),
  paper({
    title: "1.5°C Pathways: Mitigation and Feasibility",
    authors: "Rogelj, Popp, Calvin et al.",
    year: 2018,
    venue: "Nature Climate Change",
    field: "Climate & Earth Science",
    citations: 3200,
    tags: ["emissions pathways", "mitigation"],
    summary:
      "Modelled the emissions trajectories and technology mixes required to keep global warming near 1.5°C above pre-industrial levels.",
  }),
  paper({
    title: "Anthropogenic Ocean Acidification Over the Twenty-First Century",
    authors: "Orr, Fabry, Aumont et al.",
    year: 2005,
    venue: "Nature",
    field: "Climate & Earth Science",
    citations: 4700,
    tags: ["ocean acidification", "carbon cycle"],
    summary:
      "Projected how rising atmospheric CO2 will lower ocean pH, threatening calcifying marine organisms within this century.",
  }),
  paper({
    title: "The Role of Firm Capacity in Decarbonized Power Systems",
    authors: "Sepulveda, Jenkins, de Sisternes, Lester",
    year: 2018,
    venue: "Joule",
    field: "Climate & Earth Science",
    citations: 1400,
    tags: ["grid storage", "renewables"],
    summary:
      "Found that firm, low-carbon generation alongside storage is critical for cost-effectively decarbonizing electricity grids at scale.",
  }),
 
  // ------------------------------------------------------- Cybersecurity ----
  paper({
    title: "W32.Stuxnet Dossier",
    authors: "Falliere, Murchu, Chien",
    year: 2011,
    venue: "Symantec Security Response",
    field: "Cybersecurity & Privacy",
    citations: 2600,
    tags: ["Stuxnet", "critical infrastructure"],
    summary:
      "A detailed technical dissection of the first publicly documented malware built to physically sabotage industrial control systems.",
  }),
  paper({
    title: "Calibrating Noise to Sensitivity in Private Data Analysis",
    authors: "Dwork, McSherry, Nissim, Smith",
    year: 2006,
    venue: "TCC",
    field: "Cybersecurity & Privacy",
    citations: 9600,
    tags: ["differential privacy"],
    summary:
      "Formalized differential privacy, a rigorous mathematical definition for releasing statistics without exposing individual records.",
  }),
  paper({
    title: "Communication-Efficient Learning of Deep Networks from Decentralized Data",
    authors: "McMahan, Moore, Ramage, Hampson, y Arcas",
    year: 2017,
    venue: "AISTATS",
    field: "Cybersecurity & Privacy",
    citations: 13400,
    trending: true,
    tags: ["federated learning", "on-device ML"],
    summary:
      "Introduced federated averaging, training a shared model across many devices without ever centralizing their raw data.",
  }),
  paper({
    title: "Fully Homomorphic Encryption Using Ideal Lattices",
    authors: "Gentry",
    year: 2009,
    venue: "STOC",
    field: "Cybersecurity & Privacy",
    citations: 6900,
    tags: ["homomorphic encryption", "cryptography"],
    summary:
      "Constructed the first encryption scheme allowing arbitrary computation on encrypted data without ever needing to decrypt it.",
  }),
  paper({
    title: "A Survey of Machine Learning Techniques for Network Intrusion Detection",
    authors: "Buczak, Guven",
    year: 2016,
    venue: "IEEE Communications Surveys & Tutorials",
    field: "Cybersecurity & Privacy",
    citations: 3800,
    tags: ["intrusion detection", "survey"],
    summary:
      "Reviewed machine-learning approaches to detecting network intrusions, comparing accuracy and computational trade-offs across methods.",
  }),
 
  // ---------------------------------------------------------- Mathematics ----
  paper({
    title: "Modular Elliptic Curves and Fermat's Last Theorem",
    authors: "Wiles",
    year: 1995,
    venue: "Annals of Mathematics",
    field: "Mathematics & Theory",
    citations: 2100,
    tags: ["number theory", "elliptic curves"],
    summary:
      "Proved the Taniyama–Shimura conjecture for semistable elliptic curves, resolving a 358-year-old open problem in number theory.",
  }),
  paper({
    title: "The Entropy Formula for the Ricci Flow and Its Geometric Applications",
    authors: "Perelman",
    year: 2002,
    venue: "arXiv",
    field: "Mathematics & Theory",
    citations: 3400,
    tags: ["Poincaré conjecture", "topology"],
    summary:
      "Introduced techniques that, across a trio of preprints, completed the proof of the century-old Poincaré conjecture in topology.",
  }),
  paper({
    title: "The Complexity of Theorem-Proving Procedures",
    authors: "Cook",
    year: 1971,
    venue: "STOC",
    field: "Mathematics & Theory",
    citations: 12800,
    tags: ["P vs NP", "computational complexity"],
    summary:
      "Defined NP-completeness and proved SAT is NP-complete, opening the P versus NP question that still anchors theoretical computer science.",
  }),
  paper({
    title: "Equilibrium Points in N-Person Games",
    authors: "Nash",
    year: 1950,
    venue: "PNAS",
    field: "Mathematics & Theory",
    citations: 24600,
    tags: ["game theory", "Nash equilibrium"],
    summary:
      "Proved every finite game has an equilibrium point, a two-page result that became foundational to modern economics and game theory.",
  }),
  paper({
    title: "Problems of the Millennium: The Riemann Hypothesis",
    authors: "Bombieri",
    year: 2000,
    venue: "Clay Mathematics Institute",
    field: "Mathematics & Theory",
    citations: 1300,
    tags: ["Riemann hypothesis", "number theory"],
    summary:
      "Surveyed the status, evidence for, and mathematical stakes of one of the most consequential unsolved problems in pure mathematics.",
  }),
 
  // -------------------------------------------------- Physics & Economics ----
  paper({
    title: "Observation of a New Particle in the Search for the Standard Model Higgs Boson",
    authors: "ATLAS Collaboration",
    year: 2012,
    venue: "Physics Letters B",
    field: "Physics & Economics",
    citations: 13900,
    trending: true,
    tags: ["Higgs boson", "particle physics"],
    summary:
      "Reported the discovery of a new boson consistent with the long-sought Higgs particle, completing the Standard Model's particle roster.",
  }),
  paper({
    title: "Observation of Gravitational Waves from a Binary Black Hole Merger",
    authors: "Abbott, Abbott, Abbott et al. (LIGO Scientific Collaboration)",
    year: 2016,
    venue: "Physical Review Letters",
    field: "Physics & Economics",
    citations: 9700,
    trending: true,
    tags: ["gravitational waves", "LIGO"],
    summary:
      "The first direct detection of gravitational waves confirmed a century-old prediction of general relativity and opened a new astronomy.",
  }),
  paper({
    title: "Prospect Theory: An Analysis of Decision Under Risk",
    authors: "Kahneman, Tversky",
    year: 1979,
    venue: "Econometrica",
    field: "Physics & Economics",
    citations: 63000,
    tags: ["behavioral economics", "decision theory"],
    summary:
      "Showed people systematically deviate from expected-utility theory, founding behavioral economics and reshaping decision science.",
  }),
  paper({
    title: "Review of Particle Physics: The Standard Model",
    authors: "Particle Data Group",
    year: 2022,
    venue: "Progress of Theoretical and Experimental Physics",
    field: "Physics & Economics",
    citations: 8300,
    tags: ["standard model", "review"],
    summary:
      "The reference compendium of particle properties and theory summarizing the current experimental state of the Standard Model.",
  }),
  paper({
    title: "Dark Matter Candidates from Particle Physics and Methods of Detection",
    authors: "Feng",
    year: 2010,
    venue: "Annual Review of Astronomy and Astrophysics",
    field: "Physics & Economics",
    citations: 4100,
    tags: ["dark matter", "astrophysics"],
    summary:
      "Reviewed leading particle candidates for dark matter and the experimental strategies used to search for direct evidence of each.",
  }),
  paper({
    title: "A Behavioral Model of Rational Choice",
    authors: "Simon",
    year: 1955,
    venue: "The Quarterly Journal of Economics",
    field: "Physics & Economics",
    citations: 18700,
    tags: ["bounded rationality", "decision-making"],
    summary:
      "Introduced bounded rationality, arguing real decision-makers satisfice rather than optimize given limited time and information.",
  }),
];

export const getTopResearchPapers = async () => {
  return TOP_RESEARCH_PAPERS;
};

export default TOP_RESEARCH_PAPERS;