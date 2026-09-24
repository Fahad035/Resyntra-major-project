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
    url: "",
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
    url: "https://arxiv.org/abs/1706.03762",
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
    url: "https://arxiv.org/abs/1512.03385",
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
    url: "https://arxiv.org/abs/1412.6980",
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
    url: "https://jmlr.org/papers/v15/srivastava14a.html",
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
    url: "https://proceedings.mlr.press/v37/ioffe15.html",
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
    url: "https://proceedings.neurips.cc/paper/2014/hash/f033ed80deb0234979a61f95710dbe25-Abstract.html",
    summary:
      "Framed generation as a two-player game between a generator and discriminator, founding an entire family of generative modelling.",
  }),

  // --------------------------------------------------------------- NLP ----

  paper({
    title:
      "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Devlin, Chang, Lee, Toutanova",
    year: 2019,
    venue: "NAACL",
    field: "Natural Language Processing",
    citations: 98000,
    trending: true,
    tags: ["pretraining", "bidirectional", "NLU"],
    url: "https://arxiv.org/abs/1810.04805",
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
    url: "https://arxiv.org/abs/2005.14165",
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
    url: "https://arxiv.org/abs/1301.3781",
    summary:
      "Introduced word2vec, learning dense word embeddings that capture linear semantic and syntactic relationships from raw text.",
  }),

  paper({
    title:
      "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    authors: "Raffel, Shazeer, Roberts et al.",
    year: 2020,
    venue: "JMLR",
    field: "Natural Language Processing",
    citations: 14500,
    tags: ["T5", "transfer learning"],
    url: "https://arxiv.org/abs/1910.10683",
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
    url: "https://arxiv.org/abs/1907.11692",
    summary:
      "Re-examined BERT's pretraining recipe and showed longer training on more data with tuned hyperparameters substantially improves results.",
  }),

  paper({
    title:
      "Training Language Models to Follow Instructions with Human Feedback",
    authors: "Ouyang, Wu, Jiang et al.",
    year: 2022,
    venue: "NeurIPS",
    field: "Natural Language Processing",
    citations: 9200,
    trending: true,
    tags: ["InstructGPT", "RLHF", "alignment"],
    url: "https://arxiv.org/abs/2203.02155",
    summary:
      "Fine-tuned GPT-3 with human feedback so outputs better follow user intent, the recipe behind the first instruction-tuned chat models.",
  }),

  // ----------------------------------------------------------------- CV ----

  paper({
    title:
      "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors: "Dosovitskiy, Beyer, Kolesnikov et al.",
    year: 2021,
    venue: "ICLR",
    field: "Computer Vision",
    citations: 42000,
    trending: true,
    tags: ["vision transformer", "ViT"],
    url: "https://arxiv.org/abs/2010.11929",
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
    url: "https://arxiv.org/abs/1506.02640",
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
    url: "https://arxiv.org/abs/1505.04597",
    summary:
      "An encoder-decoder with skip connections that became the default architecture for pixel-accurate biomedical image segmentation.",
  }),

  paper({
    title:
      "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford, Kim, Hallacy et al.",
    year: 2021,
    venue: "ICML",
    field: "Computer Vision",
    citations: 22000,
    trending: true,
    tags: ["CLIP", "multimodal", "zero-shot"],
    url: "https://arxiv.org/abs/2103.00020",
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
    url: "https://arxiv.org/abs/2304.02643",
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
    url: "https://arxiv.org/abs/2112.10752",
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
    url: "https://www.nature.com/articles/nature16961",
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
    url: "https://www.nature.com/articles/nature14236",
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
    url: "https://arxiv.org/abs/1707.06347",
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
    url: "https://arxiv.org/abs/1706.03741",
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
    url: "https://arxiv.org/abs/1801.01290",
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
    url: "https://arxiv.org/abs/2302.13971",
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
    url: "https://arxiv.org/abs/2204.02311",
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
    url: "https://arxiv.org/abs/2203.15556",
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
    url: "https://arxiv.org/abs/2212.08073",
    summary:
      "Used a written set of principles and AI-generated feedback, instead of only human labels, to train a more harmless assistant.",
  }),

  paper({
    title:
      "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context",
    authors: "Dai, Yang, Yang et al.",
    year: 2019,
    venue: "ACL",
    field: "Large Language Models",
    citations: 4700,
    tags: ["long context", "segment recurrence"],
    url: "https://arxiv.org/abs/1901.02860",
    summary:
      "Introduced segment-level recurrence and relative positional encoding, letting Transformers model dependencies far beyond a fixed window.",
  }),

  // --------------------------------------------------------- Quantum ----

  paper({
    title:
      "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
    authors: "Shor",
    year: 1997,
    venue: "SIAM Journal on Computing",
    field: "Quantum Computing",
    citations: 14200,
    tags: ["Shor's algorithm", "factoring"],
    url: "https://arxiv.org/abs/quant-ph/9508027",
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
    url: "https://arxiv.org/abs/quant-ph/9605043",
    summary:
      "Introduced a quantum search algorithm giving a quadratic speed-up over classical search of an unsorted database.",
  }),

  paper({
    title:
      "Quantum Supremacy Using a Programmable Superconducting Processor",
    authors: "Arute, Arya, Babbush et al.",
    year: 2019,
    venue: "Nature",
    field: "Quantum Computing",
    citations: 6100,
    trending: true,
    tags: ["Sycamore", "quantum advantage"],
    url: "https://www.nature.com/articles/s41586-019-1666-5",
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
    url: "https://arxiv.org/abs/1208.0928",
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
    url: "https://arxiv.org/abs/1611.09347",
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
    url: "https://www.nature.com/articles/s41586-021-03819-2",
    summary:
      "AlphaFold2 predicted protein 3-D structures with near-experimental accuracy, resolving a fifty-year-old grand challenge in biology.",
  }),

  paper({
    title:
      "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity",
    authors: "Jinek, Chylinski, Fonfara, Hauer, Doudna, Charpentier",
    year: 2012,
    venue: "Science",
    field: "Computational Biology",
    citations: 13200,
    tags: ["CRISPR-Cas9", "gene editing"],
    url: "https://www.science.org/doi/10.1126/science.1225829",
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
    url: "https://www.nature.com/articles/35057062",
    summary:
      "Published the first draft sequence and analysis of the human genome, reshaping biomedical research for the following two decades.",
  }),

  paper({
    title:
      "Massively Parallel Digital Transcriptional Profiling of Single Cells",
    authors: "Zheng, Terry, Belgrader et al.",
    year: 2017,
    venue: "Nature Communications",
    field: "Computational Biology",
    citations: 9700,
    tags: ["single-cell RNA-seq", "genomics"],
    url: "https://www.nature.com/articles/ncomms14049",
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
    url: "https://www.nature.com/articles/nrd.2017.243",
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
    url: "https://doi.org/10.1016/j.cell.2011.02.013",
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
    url: "https://global.oup.com/academic/product/the-hippocampus-as-a-cognitive-map-9780198521235",
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
    url: "https://www.nature.com/articles/nature03721",
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
    url: "https://doi.org/10.1146/annurev-neuro-071013-014030",
    summary:
      "Reviewed two decades of evidence for a brain network active during rest that underlies self-referential thought and mind-wandering.",
  }),

  paper({
    title:
      "The Human Connectome Project: A Data Acquisition Perspective",
    authors: "Van Essen, Ugurbil, Auerbach et al.",
    year: 2012,
    venue: "NeuroImage",
    field: "Neuroscience",
    citations: 4200,
    tags: ["connectome", "brain mapping"],
    url: "https://doi.org/10.1016/j.neuroimage.2012.02.018",
    summary:
      "Outlined the imaging protocols behind an open dataset mapping structural and functional brain connections across hundreds of subjects.",
  }),

  paper({
    title:
      "Performance-Optimized Hierarchical Models Predict Neural Responses in Higher Visual Cortex",
    authors: "Yamins, Hong, Cadieu et al.",
    year: 2014,
    venue: "PNAS",
    field: "Neuroscience",
    citations: 3300,
    tags: ["deep learning", "visual cortex"],
    url: "https://www.pnas.org/doi/10.1073/pnas.1403112111",
    summary:
      "Showed that deep networks optimized for object recognition also predict neural activity in the primate visual cortex remarkably well.",
  }),

  // ------------------------------------------------------------ Climate ----

  paper({
    title:
      "IPCC Sixth Assessment Report: Climate Change 2021 — The Physical Science Basis",
    authors: "IPCC Working Group I",
    year: 2021,
    venue: "IPCC",
    field: "Climate & Earth Science",
    citations: 15600,
    trending: true,
    tags: ["climate assessment", "policy"],
    url: "https://www.ipcc.ch/report/ar6/wg1/",
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
    url: "https://doi.org/10.1111/j.2153-3490.1976.tb00701.x",
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
    url: "https://www.nature.com/articles/s41558-018-0091-3",
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
    url: "https://www.nature.com/articles/nature04095",
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
    url: "https://doi.org/10.1016/j.joule.2018.08.006",
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
    url: "https://www.wired.com/images_blogs/threatlevel/2011/02/stuxnet-technical-report.pdf",
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
    url: "https://link.springer.com/chapter/10.1007/11681878_14",
    summary:
      "Formalized differential privacy, a rigorous mathematical definition for releasing statistics without exposing individual records.",
  }),

  paper({
    title:
      "Communication-Efficient Learning of Deep Networks from Decentralized Data",
    authors: "McMahan, Moore, Ramage, Hampson, y Arcas",
    year: 2017,
    venue: "AISTATS",
    field: "Cybersecurity & Privacy",
    citations: 13400,
    trending: true,
    tags: ["federated learning", "on-device ML"],
    url: "https://arxiv.org/abs/1602.05629",
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
    url: "https://crypto.stanford.edu/craig/craig-thesis.pdf",
    summary:
      "Constructed the first encryption scheme allowing arbitrary computation on encrypted data without ever needing to decrypt it.",
  }),

  paper({
    title:
      "A Survey of Machine Learning Techniques for Network Intrusion Detection",
    authors: "Buczak, Guven",
    year: 2016,
    venue: "IEEE Communications Surveys & Tutorials",
    field: "Cybersecurity & Privacy",
    citations: 3800,
    tags: ["intrusion detection", "survey"],
    url: "https://doi.org/10.1109/COMST.2015.2494502",
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
    url: "https://annals.math.princeton.edu/1995/141-3/p7",
    summary:
      "Proved the Taniyama–Shimura conjecture for semistable elliptic curves, resolving a 358-year-old open problem in number theory.",
  }),

  paper({
    title:
      "The Entropy Formula for the Ricci Flow and Its Geometric Applications",
    authors: "Perelman",
    year: 2002,
    venue: "arXiv",
    field: "Mathematics & Theory",
    citations: 3400,
    tags: ["Poincaré conjecture", "topology"],
    url: "https://arxiv.org/abs/math/0211159",
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
    url: "https://doi.org/10.1145/800157.805047",
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
    url: "https://www.pnas.org/doi/10.1073/pnas.36.1.48",
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
    url: "https://www.claymath.org/millennium-problems/riemann-hypothesis/",
    summary:
      "Surveyed the status, evidence for, and mathematical stakes of one of the most consequential unsolved problems in pure mathematics.",
  }),

  // -------------------------------------------------- Physics & Economics ----

  paper({
    title:
      "Observation of a New Particle in the Search for the Standard Model Higgs Boson",
    authors: "ATLAS Collaboration",
    year: 2012,
    venue: "Physics Letters B",
    field: "Physics & Economics",
    citations: 13900,
    trending: true,
    tags: ["Higgs boson", "particle physics"],
    url: "https://doi.org/10.1016/j.physletb.2012.08.020",
    summary:
      "Reported the discovery of a new boson consistent with the long-sought Higgs particle, completing the Standard Model's particle roster.",
  }),

  paper({
    title:
      "Observation of Gravitational Waves from a Binary Black Hole Merger",
    authors:
      "Abbott, Abbott, Abbott et al. (LIGO Scientific Collaboration)",
    year: 2016,
    venue: "Physical Review Letters",
    field: "Physics & Economics",
    citations: 9700,
    trending: true,
    tags: ["gravitational waves", "LIGO"],
    url: "https://doi.org/10.1103/PhysRevLett.116.061102",
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
    url: "https://doi.org/10.2307/1914185",
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
    url: "https://pdg.lbl.gov/",
    summary:
      "The reference compendium of particle properties and theory summarizing the current experimental state of the Standard Model.",
  }),

  paper({
    title:
      "Dark Matter Candidates from Particle Physics and Methods of Detection",
    authors: "Feng",
    year: 2010,
    venue: "Annual Review of Astronomy and Astrophysics",
    field: "Physics & Economics",
    citations: 4100,
    tags: ["dark matter", "astrophysics"],
    url: "https://doi.org/10.1146/annurev-astro-082708-101659",
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
    url: "https://doi.org/10.2307/1884852",
    summary:
      "Introduced bounded rationality, arguing real decision-makers satisfice rather than optimize given limited time and information.",
  }),
];

export const getTopResearchPapers = async () => {
  return TOP_RESEARCH_PAPERS;
};

export default TOP_RESEARCH_PAPERS;