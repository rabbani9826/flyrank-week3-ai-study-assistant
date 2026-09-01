# AI Workflow – Round 2

## Feature and Goal

The capstone feature is a browser-based account settings form containing profile and preference settings. In Round 2, the goal was to improve the existing form with stronger validation, accessibility, and persistence behavior while keeping the original design and functionality intact.

## AI-Assisted Changes

I used AI to review and improve the existing implementation rather than asking it to create an unrelated project. The Round 2 changes affected `index.html`, `script.js`, `style.css`, and `README.md`.

The HTML changes improved form accessibility by connecting labels and help text to their inputs. Validation messages were also associated with the relevant fields. The JavaScript changes added validation for required fields, email format, and minimum password length. The settings are saved in the browser so that preference values remain available after refreshing the page. CSS changes support the validation states and keep the new messages consistent with the existing visual design.

## Verification Process

I tested the form manually using several edge cases. First, I submitted an empty form and confirmed that validation messages appeared for the name, email, and password fields. Second, I entered an invalid email such as `abc` and confirmed that the form rejected it while accepting the other valid fields. Third, I entered a password shorter than eight characters and confirmed that the correct validation message appeared. Finally, I entered valid values and confirmed that the form displayed a successful save message.

I also tested persistence by refreshing the browser after saving valid settings. The saved name, email, appearance, language, and product-update preference remained available after the refresh.

## AI Review and Mistake Caught

One important lesson from the AI workflow was that generated code still needed to be tested rather than trusted automatically. I verified the implementation through actual browser tests and compared the Round 2 branch against Round 1 using Git. The diff showed changes in all four expected project files. This verification helped confirm that the implementation matched the requested feature instead of relying only on the AI's explanation.

## Lessons Learned

The most useful part of the workflow was separating generation from verification. AI helped implement and explain the changes, but I was responsible for checking edge cases, testing the browser behavior, reviewing the Git diff, and confirming persistence after refresh. This made the final result more reliable and gave me a clearer understanding of how to use AI as a development assistant rather than simply accepting generated code.