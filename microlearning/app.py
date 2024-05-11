from fastapi import FastAPI
from transformers import pipeline

# Import your functions (assuming they are in a separate file named 'functions.py')
from functions import preprocess_query, recommend_from_dataset, summarize_and_generate

app = FastAPI()

# Load Hugging Face summarization and text generation pipelines (replace with your model names)
summarizer = pipeline("summarization", model="facebook/bart-base")
text_generator = pipeline("text-generation", model="gpt2")

@app.post("/process_query")
async def process_query(query: str):
    """
    Process a user query, including preprocessing, recommendations, summarization, and text generation.
    """
    cleaned_query = preprocess_query(query)
    recommendations = recommend_from_dataset(cleaned_query)
    results = summarize_and_generate(query, recommendations)
    return results

# Run the application (usually in a separate script)
# if __name__ == "__main__":
#     uvicorn app:app --reload  # Replace 'app' with your main file name if different
