import openai

# Use the secret API key here
openai.api_key = "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"

from openai import OpenAI

def generate_email(data):
    # Prepare a detailed prompt for generating the email
    prompt = f"""
    Write a personalized email to {data['name']}, who is a {data['role']}.
    The email should be about: {data['topic']}.
    Use a {data['tone']} tone and the purpose of the email is: {data['purpose']}.
    The email should be professional, polite, and well-structured.
    """

    # Call OpenAI API to generate the email content
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message["content"]
