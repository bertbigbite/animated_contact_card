# Animated Contact Button - Learning Task

This repository provides a learning task focused on creating an animated contact button styled as an envelope. The project is structured into multiple tasks, each guiding students through different animation techniques and interactions.

Examples for each task are available on a separate branchs, allowing for step-by-step progression. Follow the links provided to access each task.

---

## 🚀 Getting Started

To get started, clone the repository and switch to the desired branch:
```sh
git clone https://github.com/bertbigbite/animated_contact_card.git
cd animated_contact_card
git checkout <branch-name>
```
Replace `<branch-name>` with the relevant branch for each task.

---

## 📝 Task Instructions

### Task 1: Basic Hover Animation
**Branch:** [`Task_1`](https://github.com/bertbigbite/animated_contact_card/tree/Task_1)
1. Create an envelope-style contact button using HTML and CSS.
2. The button should include an icon style element which represents a contact form.
3. Add a hover effect to reveal a the contact card, following the opening of the envelope.
4. Ensure smooth transitions using `opacity` and `transform` properties.

##
### Task 2: Internal Card Animation
**Branch:** [`Task_2`](https://github.com/bertbigbite/animated_contact_card/tree/Task_2)
Extend Task 1 by animating elements inside the 'contact card' using CSS. Implement the following: 

- Using transitions, simulate the completion of the contact form on `hover`, eg, adding transitions to the `width` property.
- Create a `.fake-cursor` that moves, using `transform` and `translate`.
- Add a `.tick` element that appears with `opacity` and `visibility` properties, after a delay in the `:active` state.
- Animate the `.submit-btn` button to change some properties, such as `background-color` or `scale` after a delay.
- Ensure elements return to their default state when not active, using for smooth visibility toggling.
  
##
### Task 3: Advanced Envelope Animation
**Branch:** [`Task_3`](https://github.com/bertbigbite/animated_contact_card/tree/Task_3)
1. Use keyframes to animate the envelope opening.
2. On hover:
   - Flip the envelope’s top flap open, using a skew effect for realism
   - Slightly pop out the contact card.
3. Trigger internal card animations on `:active` instead of `:hover`.
##
### Task 4: Popover Attribute Implementation
The folowing will support you with the next few tasks https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
#### 4.1: Setting Up the Popover
**Branch:** [`Task_4.1_setting_popover`](https://github.com/bertbigbite/animated_contact_card/tree/Task_4.1_setting_popover)
1. Convert the contact button container into a button element.
2. Add the `popover` attribute to display a contact modal.
3. Structure the modal content using HTML.
##
#### 4.2: Styling the Popover
**Branch:** [`Task_4.2_popover_styles`](https://github.com/bertbigbite/animated_contact_card/tree/Task_4.2_popover_styles)
1. Style the popover modal using CSS.
2. Add a `100vw x 100vh` background overlay with opacity.
3. Ensure content behind the modal is visually obscured.
##
#### 4.3: Closing the Popover
**Branch:** [`Task_4.3_closing_modal`](https://github.com/bertbigbite/animated_contact_card/tree/Task_4.3_closing_modal)
1. Implement the `hidePopover()` function to allow closing the modal.
2. Ensure keyboard and click events work for closing.
##
#### 4.4: Advanced Popover Techniques
**Branch:** [`Task_4.4_popover_advanced`](https://github.com/bertbigbite/animated_contact_card/tree/Task_4.4_popover_advanced)
1. Use `blur` instead of an overlay for the background effect. https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop
2. Add animations to the popover for smooth transitions.
3. Explore additional `popover` attributes for enhanced interactivity.

---

## 🛠 Technologies Used
- HTML, CSS, JavaScript
- CSS animations & keyframes
- Popover API
