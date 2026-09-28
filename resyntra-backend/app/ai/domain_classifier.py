from pathlib import Path

import joblib
from sentence_transformers import SentenceTransformer


# ---------------------------------------------------------
# Paths
# ---------------------------------------------------------

ROOT_DIR = Path(__file__).resolve().parents[2]

MODEL_DIR = (
    ROOT_DIR
    / "models"
    / "domain_classifier"
)

CLASSIFIER_PATH = (
    MODEL_DIR
    / "sentence_transformer_classifier.joblib"
)

EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2"


# ---------------------------------------------------------
# Domain Classifier
# ---------------------------------------------------------

class DomainClassifier:

    def __init__(self):

        print("Loading domain classifier...")

        # Load pretrained embedding model
        self.embedding_model = SentenceTransformer(
            EMBEDDING_MODEL_NAME
        )

        # Load trained classifier
        self.classifier = joblib.load(
            CLASSIFIER_PATH
        )

        print(
            "Domain classifier loaded successfully."
        )

    # -----------------------------------------------------
    # Prediction
    # -----------------------------------------------------

    def predict(
        self,
        title: str,
        abstract: str,
    ) -> str:

        text = (
            f"{title.strip()} "
            f"{abstract.strip()}"
        )

        embedding = self.embedding_model.encode(
            [text],
            show_progress_bar=False,
        )

        prediction = self.classifier.predict(
            embedding
        )[0]

        return str(prediction)


# ---------------------------------------------------------
# Singleton instance
# ---------------------------------------------------------

domain_classifier = DomainClassifier()