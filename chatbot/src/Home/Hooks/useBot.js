export const useBot = () => {

    async function botSend(past_user_inputs, generated_responses, messageText) {

        console.log('Sending Bot Message')

        const data = {

            "inputs": {
                "past_user_inputs": past_user_inputs,
                "generated_responses": generated_responses,
                "text": messageText
            }
        }

        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    }

    return {

        botSend

    }
}
