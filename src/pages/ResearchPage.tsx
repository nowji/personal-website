import React from "react";
import EmpatheticDialogue from "../assets/empatheticdialogue.png";

const ResearchPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-left justify-start p-4 md:p-8">
      <h1 className="text-5xl font-bold mb-4">Research</h1>
      <hr className="mt-2 mb-6 w-4/5"></hr>
      <h2 className="text-4xl font-bold mb-2">Emphatic Perspectives</h2>
      <h3 className="text-xl font-semibold mb-2">
        PI:{" "}
        <a
          href="https://phil.ufl.edu/directory/dr-cameron-buckner/"
          target="_blank"
          className="text-[#1717cf]"
        >
          Cameron Buckner
        </a>
      </h3>
      <h3 className="text-xl font-semibold mb-2">
        College of Liberal Arts and Sciences
      </h3>
      <h3 className="text-xl font-semibold mb-2">Philosophy Department</h3>
      <h3 className="text-l italic mb-6">August 2025 - May 2026</h3>
      <div className="mb-6">
        <img src={EmpatheticDialogue} width="30%" />
        <h4 className="text-sm">
          An example of LLM's understanding empathy from{" "}
          <span className="italic">
            Towards Empathetic Open-domain Conversation Models: a New Benchmark
            and Dataset
          </span>
        </h4>
      </div>
      <p>
        &emsp;This research project aims to imbue a Large Language Model (LLM)
        with a diverse range of perspectives on common situations to make the
        LLM have a better understanding of empathy than what current training
        datasets allow. This project will build upon EmphaticDialouges, the
        flagship database used to train models to be more empathetic.
        EmphaticDialouges has 25,000 short conversations, each labeled with the
        emotion conveyed. This only touches on one aspect of empathy, emotion
        recognition, and fails to fulfill the perspective-taking aspect, which
        is what this project aims to add. In a complicated situation, like being
        fired from a job, some people can be excited to leave a dead-end job or
        abusive boss while others will be sad that they had to leave for
        external reasons and miss their projects or coworkers. The
        EmphaticDialouges corpora would only capture one emotion for this
        situation, which would be insufficient to create truly empathetic
        models.
      </p>
      <br />
      <p>
        &emsp;To collect example responses and build a dataset, I plan on
        creating many situations that elicit different responses, similar to the
        example above. Then, I would use a tool like Amazon Mechanical Turk to
        have people generate multiple conversations for each situation where
        each conversation reflects a different emotion the person may be
        experiencing. After an appropriate number of conversations have been
        recorded, I can then split the data to finetune an LLM on the training
        data and verify the results on the testing set. Once the LLM has been
        trained on the dataset, I can have research participants interact with
        the model to see if they feel it is more empathetic and if it is better
        at understanding their emotions when compared to current LLMs. This
        research is significant for several reasons. Firstly, by training models
        on diverse perspectives, we can create AI systems that better understand
        the complexity of human experiences and emotions. Secondly,
        incorporating multiple viewpoints can help mitigate biases present in
        single-perspective datasets, leading to more balanced AI outputs.
        Lastly, a model capable of providing diverse perspectives could enhance
        decision-making processes and foster more nuanced discussions in various
        fields, from healthcare to social services.
      </p>
      <br />
      <p>
        &emsp;The expected outcomes of this research include: (1) a novel,
        multi-perspective dataset for training language models; (2) an LLM
        capable of generating diverse, contextually appropriate responses to
        given scenarios; (3) insights into the effectiveness of
        multi-perspective training in reducing AI bias and enhancing empathy;
        and (4) potential applications in fields requiring nuanced understanding
        of human experiences, such as mental health support, conflict
        resolution, and social policy development.
      </p>
    </div>
  );
};

export default ResearchPage;
