// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "\u003Ch2\u003EEmotion and liking for images and music\u003C\u002Fh2\u003E",
              "content": "Welcome, and thank you for taking part in this study!"
            },
            {
              "required": true,
              "type": "text",
              "content": "This study is conducted by students enrolled in the course Human Perception for Information Technology at KTH Royal Institute of Technology. Please, read the following information before participating.\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\nWe are interested in investigating liking and emotion across sensory modalities. To do so, we will ask you to rate some visual designs and musical stimuli. \u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\nThe whole session should take about 40 minutes. You are welcome to take breaks between tasks, but it is important that you perform each task without interruptions. Then, we will ask to fill out two questionnaires, and provide some demographic information.",
              "title": "About the study"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "text",
              "content": "Your participation is entirely voluntary and anonymous. You are welcome to withdraw at any time and without justification. All data is treated in strict confidence and handled securely in agreement with the GDPR and local regulations. The anonymized data will be made available to other researchers and the results of the study will be published. This research implies no known risks or direct benefits.",
              "title": "Terms of participation"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "text",
              "title": "Requirements and consent",
              "content": "To take part in this study you need to be at least 18 years of age, have normal or corrected-to- normal vision and hearing, and no cognitive impairments. Please state your agreement with the following statements to confirm your participation."
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "coding": "yes"
                },
                {
                  "label": "No",
                  "coding": "no"
                }
              ],
              "label": "I am aged 18 or above",
              "name": "declaration-age"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "coding": "yes"
                },
                {
                  "label": "No",
                  "coding": "no"
                }
              ],
              "label": "I have normal or corrected-to-normal vision and hearing",
              "name": "declaration-vision"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "Yes, I don't have",
                  "coding": "yes"
                },
                {
                  "label": "No, I do have",
                  "coding": "no"
                }
              ],
              "label": "I have no cognitive impairments",
              "name": "declaration-impairments"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "Yes",
                  "coding": "yes"
                },
                {
                  "label": "No",
                  "coding": "no"
                }
              ],
              "label": "I declare having read and understood the disclaimer and information above, and agree to participate",
              "name": "declaration-agreement"
            },
            {
              "required": true,
              "type": "divider"
            },
            {
              "required": true,
              "type": "text",
              "title": "Thank you for taking part in this study!"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// Save relevant radio buttons
let declarationAgeInput = document.querySelector('#declaration-age-yes');
let declarationVisionInput = document.querySelector('#declaration-vision-yes');
let declarationImpairmentsInput = document.querySelector('#declaration-impairments-yes');
let declarationAgreementInput = document.querySelector('#declaration-agreement-yes');

// Save and disable continue button
let continueButton = document.querySelector('button[type="submit"]');
continueButton.disabled = true;

// Checks relevant radio buttons when clicking on any radio button
checkRadioButton = () => {
  if (declarationAgeInput.checked &&
      declarationVisionInput.checked &&
      declarationImpairmentsInput.checked &&
      declarationAgreementInput.checked) {
        continueButton.disabled = false;
  }
  else {
    continueButton.disabled = true;
  }
}

// Attach a focusout listener to all radio buttons
Array.from(document.querySelectorAll('input')).map(elem => elem.addEventListener("click", checkRadioButton));




}
          },
          "title": "Welcome page",
          "correctResponse": "Yes",
          "width": "l"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "parameters": {},
          "responses": {
            "click button": "continue"
          },
          "messageHandlers": {},
          "title": "Headphones",
          "content": "\u003Cheader\u003E\n  \u003Ch2\u003ESound calibration\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-m\"\u003E\n    \u003Cdiv class=\"alert w-100\"\u003E\n      \u003Cp class=\"font-weight-bold\"\u003E\n        You \u003Cb\u003Emust wear headphones\u003Cbr\u003E\n        during this study!\u003C\u002Fb\u003E\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cp\u003E\n      Click below after you have fitted your headphones\u003Cbr\u003E to start the calibration.\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        },
        {
          "type": "lab.html.Screen",
          "files": {
            "noise_calib_stim.wav": "embedded\u002Fd46823570e5c1dd1a6cfbe1f9688c06d98a3d203fae63579866669a5070f658a.wav"
          },
          "parameters": {},
          "responses": {
            "click button": "continue"
          },
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = this.files['noise_calib_stim.wav']
this.internals.calibrationClip.load()

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.internals.calibrationClip.play()
}
},
            "end": function anonymous(
) {
delete this.internals.calibrationClip
}
          },
          "title": "Volume calibration",
          "content": "\u003Cheader\u003E\n  \u003Ch2\u003ESound calibration\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cdiv class=\"alert w-100 text-center\"\u003E\n      \u003Cp class=\"font-weight-bold\"\u003E\n        We will now calibrate\u003Cbr\u003E\n        the volume of your headphones.\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cp\u003E\n      Please take through the following steps to calibrate your headphones:\n    \u003C\u002Fp\u003E\n    \u003Col\u003E\n      \u003Cli\u003E\u003Cstrong\u003ESet your computer volume to about 25%\u003C\u002Fstrong\u003E of its maximum level.\u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Ca href=\"#\"\u003EClick here\u003C\u002Fa\u003E to listen to a calibration sound. \u003Cstrong\u003ETurn up the volume on your computer until the calibration sound is at a loud but comfortable level.\u003C\u002Fstrong\u003E You can listen to it as many times as you like.\u003C\u002Fli\u003E\n    \u003C\u002Fol\u003E\n    \u003Cp\u003EClick below once you have set the computer volume to a loud but comfortable level\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "title": "Main visual",
          "type": "lab.flow.Sequence",
          "parameters": {},
          "plugins": [],
          "metadata": {
            "title": "",
            "description": "",
            "repository": "",
            "contributors": ""
          },
          "files": {},
          "responses": {},
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Visual task",
                  "content": "You will be presented with three blocks of visual designs, and asked to rate each image on the following scales:\u003Cbr\u003E\n\u003Cb\u003ELiking\u003C\u002Fb\u003E refers to the subjective feelings of pleasure, interest, and fulfillment that the stimulus provokes or evokes in you.\u003Cbr\u003E\n\u003Cb\u003EValence\u003C\u002Fb\u003E ranges from very negative to very positive.\u003Cbr\u002F\u003E\n\u003Cb\u003EArousal\u003C\u002Fb\u003E alludes to the level of activation perceived in the stimulus.\u003Cbr\u003E\u003Cbr\u003E \nNow you will take four practice trials to familiarize yourself with the task."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Info about practice"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "file": "a"
                },
                {
                  "file": "e"
                },
                {
                  "file": "i"
                },
                {
                  "file": "o"
                }
              ],
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Trial visual stimuli",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "Template stimuli sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": "-50",
                        "angle": 0,
                        "width": 1024,
                        "height": 768,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ this.files[\"Fixation (1).png\"] }"
                      }
                    ],
                    "files": {
                      "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg",
                      "Fixation (1).png": "embedded\u002Ffb3b3f841064108e84d5e97371d06726d95cd732f62942847280088e0a365aeb.png"
                    },
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "viewport": [
                      800,
                      600
                    ],
                    "title": "Fixation cross",
                    "timeout": "500"
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #like-1": "-2",
                      "click #like-2": "-1",
                      "click #like-3": "0",
                      "click #like-4": "1",
                      "click #like-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Liking",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n        \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #val-1": "-2",
                      "click #val-2": "-1",
                      "click #val-3": "0",
                      "click #val-4": "1",
                      "click #val-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Perceiving 1",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #arousal-1": "-2",
                      "click #arousal-2": "-1",
                      "click #arousal-3": "0",
                      "click #arousal-4": "1",
                      "click #arousal-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Perceiving 2",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  }
                ]
              }
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Instructions",
                  "content": "Thanks for completing the practice. Please, ask us if anything is not crystal clear yet.\n\u003Cbr\u003E\u003Cbr\u003E\nNow the actual task begins. It is divided into blocks. If you want to take a break, you can do so between the blocks.\n\u003Cbr\u003E\u003Cbr\u003E\nPlease, click Continue to start."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Info real test"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Main visual sequence",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block J",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "You are now about to start a new block.\u003Cbr\u003E\nIf you want to take a break before starting, please do so now.\n\u003Cbr\u003E\u003Cbr\u003E\nTo proceed, click Continue.",
                          "title": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "J1"
                        },
                        {
                          "file": "J2"
                        },
                        {
                          "file": "J3"
                        },
                        {
                          "file": "J4"
                        },
                        {
                          "file": "J5"
                        },
                        {
                          "file": "J6"
                        },
                        {
                          "file": "J7"
                        },
                        {
                          "file": "J8"
                        },
                        {
                          "file": "J9"
                        },
                        {
                          "file": "J10"
                        },
                        {
                          "file": "J11"
                        },
                        {
                          "file": "J12"
                        },
                        {
                          "file": "J13"
                        },
                        {
                          "file": "J14"
                        },
                        {
                          "file": "J15"
                        },
                        {
                          "file": "J16"
                        },
                        {
                          "file": "J17"
                        },
                        {
                          "file": "J18"
                        },
                        {
                          "file": "J19"
                        },
                        {
                          "file": "J20"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block J visual stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Template stimuli sequence",
                        "content": [
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "image",
                                "left": 0,
                                "top": "-50",
                                "angle": 0,
                                "width": 1024,
                                "height": 768,
                                "stroke": null,
                                "strokeWidth": 0,
                                "fill": "black",
                                "src": "${ this.files[\"Fixation (1).png\"] }"
                              }
                            ],
                            "files": {
                              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg",
                              "Fixation (1).png": "embedded\u002Ffb3b3f841064108e84d5e97371d06726d95cd732f62942847280088e0a365aeb.png"
                            },
                            "parameters": {},
                            "responses": {},
                            "messageHandlers": {},
                            "viewport": [
                              800,
                              600
                            ],
                            "title": "Fixation cross",
                            "timeout": "500"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n        \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block P",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "If you want to take a break before starting, please do so now. \u003C\u002Fbr\u003E \u003C\u002Fbr\u003E\nTo start, click Continue.",
                          "title": "You are now about  to start a new block."
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "P1"
                        },
                        {
                          "file": "P2"
                        },
                        {
                          "file": "P3"
                        },
                        {
                          "file": "P4"
                        },
                        {
                          "file": "P5"
                        },
                        {
                          "file": "P6"
                        },
                        {
                          "file": "P7"
                        },
                        {
                          "file": "P8"
                        },
                        {
                          "file": "P9"
                        },
                        {
                          "file": "P10"
                        },
                        {
                          "file": "P11"
                        },
                        {
                          "file": "P12"
                        },
                        {
                          "file": "P13"
                        },
                        {
                          "file": "P14"
                        },
                        {
                          "file": "P15"
                        },
                        {
                          "file": "P16"
                        },
                        {
                          "file": "P17"
                        },
                        {
                          "file": "P18"
                        },
                        {
                          "file": "P19"
                        },
                        {
                          "file": "P20"
                        },
                        {
                          "file": "P21"
                        },
                        {
                          "file": "P22"
                        },
                        {
                          "file": "P23"
                        },
                        {
                          "file": "P24"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block P visual stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Template stimuli sequence",
                        "content": [
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "image",
                                "left": 0,
                                "top": "-50",
                                "angle": 0,
                                "width": 1024,
                                "height": 768,
                                "stroke": null,
                                "strokeWidth": 0,
                                "fill": "black",
                                "src": "${ this.files[\"Fixation (1).png\"] }"
                              }
                            ],
                            "files": {
                              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg",
                              "Fixation (1).png": "embedded\u002Ffb3b3f841064108e84d5e97371d06726d95cd732f62942847280088e0a365aeb.png"
                            },
                            "parameters": {},
                            "responses": {},
                            "messageHandlers": {},
                            "viewport": [
                              800,
                              600
                            ],
                            "title": "Fixation cross",
                            "timeout": "500"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n        \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block W",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "If you want to take a break before starting, please do so now. \u003C\u002Fbr\u003E \u003C\u002Fbr\u003E\n\nTo start, click Continue.",
                          "title": "You are now about  to start a new block."
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "W1"
                        },
                        {
                          "file": "W2"
                        },
                        {
                          "file": "W3"
                        },
                        {
                          "file": "W4"
                        },
                        {
                          "file": "W5"
                        },
                        {
                          "file": "W6"
                        },
                        {
                          "file": "W7"
                        },
                        {
                          "file": "W8"
                        },
                        {
                          "file": "W9"
                        },
                        {
                          "file": "W10"
                        },
                        {
                          "file": "W11"
                        },
                        {
                          "file": "W12"
                        },
                        {
                          "file": "W13"
                        },
                        {
                          "file": "W14"
                        },
                        {
                          "file": "W15"
                        },
                        {
                          "file": "W16"
                        },
                        {
                          "file": "W17"
                        },
                        {
                          "file": "W18"
                        },
                        {
                          "file": "W19"
                        },
                        {
                          "file": "W20"
                        },
                        {
                          "file": "W21"
                        },
                        {
                          "file": "W22"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block W visual stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Template stimuli sequence",
                        "content": [
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "image",
                                "left": 0,
                                "top": "-50",
                                "angle": 0,
                                "width": 1024,
                                "height": 768,
                                "stroke": null,
                                "strokeWidth": 0,
                                "fill": "black",
                                "src": "${ this.files[\"Fixation (1).png\"] }"
                              }
                            ],
                            "files": {
                              "fixation.svg": "embedded\u002F43a10d563ae03eb43aa1d16599f75682f97bdbb1ece148c5a39cd269957a9098.svg",
                              "Fixation (1).png": "embedded\u002Ffb3b3f841064108e84d5e97371d06726d95cd732f62942847280088e0a365aeb.png"
                            },
                            "parameters": {},
                            "responses": {},
                            "messageHandlers": {},
                            "viewport": [
                              800,
                              600
                            ],
                            "title": "Fixation cross",
                            "timeout": "500"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n        \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cimg src=${\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002F\" + this.parameters.file + \".png\"} class=\"image\"\u002F\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Main Auditorial",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Auditory task",
                  "content": "You will be presented with four blocks of musical motifs, and asked to rate each image on the following scales:\u003Cbr\u003E\n\u003Cb\u003ELiking\u003C\u002Fb\u003E refers to the subjective feelings of pleasure, interest, and fulfillment that the stimulus provokes or evokes in you.\u003Cbr\u003E\n\u003Cb\u003EValence\u003C\u002Fb\u003E ranges from very negative to very positive.\u003Cbr\u002F\u003E\n\u003Cb\u003EArousal\u003C\u002Fb\u003E alludes to the level of activation perceived in the stimulus.\u003Cbr\u003E\u003Cbr\u003E \nNow you will take four practice trials to familiarize yourself with the task."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Info about practice"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "file": "b"
                },
                {
                  "file": "c"
                },
                {
                  "file": "k"
                },
                {
                  "file": "s"
                }
              ],
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Trial audiotorial stimuli",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "Audio stimuli sequence",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Please, listen to this musical motif.",
                        "content": "When it has finished, you will automatically proceed to the next screen."
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Autoplay",
                    "timeline": [
                      {
                        "type": "sound",
                        "start": 0,
                        "stop": "7000",
                        "priority": 0,
                        "payload": {
                          "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FEllaSoderberg\u002FEmotionandLiking\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.file}.wav"
                        }
                      }
                    ],
                    "timeout": "7000"
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #like-1": "-2",
                      "click #like-2": "-1",
                      "click #like-3": "0",
                      "click #like-4": "1",
                      "click #like-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.internals.calibrationClip.play()
}
}
                    },
                    "title": "Liking",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #val-1": "-2",
                      "click #val-2": "-1",
                      "click #val-3": "0",
                      "click #val-4": "1",
                      "click #val-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.internals.calibrationClip.play()
}
}
                    },
                    "title": "Perceiving 1",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click #arousal-1": "-2",
                      "click #arousal-2": "-1",
                      "click #arousal-3": "0",
                      "click #arousal-4": "1",
                      "click #arousal-5": "2"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.internals.calibrationClip.play()
}
}
                    },
                    "title": "Perceiving 2",
                    "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                  }
                ]
              }
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Instructions",
                  "content": "Thanks for completing the practice. Please, ask us if anything is not crystal clear yet.\u003Cbr\u003E\u003Cbr\u003E\nNow the actual task begins. It is divided into blocks. If you want to take a break, you can do so between the blocks.\u003Cbr\u003E\u003Cbr\u003E\nPlease, click Continue to start."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Info real test"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Main audiotorial sequence",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block B",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "If you want to take a break before starting, please do so now. \u003C\u002Fbr\u003E \u003C\u002Fbr\u003E\n\nTo start, click Continue",
                          "title": "You are now about  to start a new block."
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "B1"
                        },
                        {
                          "file": "B3"
                        },
                        {
                          "file": "B4"
                        },
                        {
                          "file": "B7"
                        },
                        {
                          "file": "B12"
                        },
                        {
                          "file": "B13"
                        },
                        {
                          "file": "B14"
                        },
                        {
                          "file": "B17"
                        },
                        {
                          "file": "B19"
                        },
                        {
                          "file": "B23"
                        },
                        {
                          "file": "B25"
                        },
                        {
                          "file": "B26"
                        },
                        {
                          "file": "B31"
                        },
                        {
                          "file": "B32"
                        },
                        {
                          "file": "B34"
                        },
                        {
                          "file": "B35"
                        },
                        {
                          "file": "B38"
                        },
                        {
                          "file": "B41"
                        },
                        {
                          "file": "B43"
                        },
                        {
                          "file": "B45"
                        },
                        {
                          "file": "B46"
                        },
                        {
                          "file": "B49"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block B auditorial stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Audio stimuli sequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "Please, listen to this musical motif.",
                                "content": "When it has finished, you will automatically proceed to the next screen."
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Autoplay",
                            "timeline": [
                              {
                                "type": "sound",
                                "start": 0,
                                "stop": "7000",
                                "priority": 0,
                                "payload": {
                                  "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FEllaSoderberg\u002FEmotionandLiking\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.file}.wav"
                                }
                              }
                            ],
                            "timeout": "7000"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block C",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "If you want to take a break before starting, please do so now. \u003C\u002Fbr\u003E \u003C\u002Fbr\u003E\n\nTo start, click Continue",
                          "title": "You are now about  to start a new block."
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "C2"
                        },
                        {
                          "file": "C3"
                        },
                        {
                          "file": "C5"
                        },
                        {
                          "file": "C7"
                        },
                        {
                          "file": "C13"
                        },
                        {
                          "file": "C15"
                        },
                        {
                          "file": "C20"
                        },
                        {
                          "file": "C21"
                        },
                        {
                          "file": "C22"
                        },
                        {
                          "file": "C23"
                        },
                        {
                          "file": "C25"
                        },
                        {
                          "file": "C26"
                        },
                        {
                          "file": "C27"
                        },
                        {
                          "file": "C29"
                        },
                        {
                          "file": "C32"
                        },
                        {
                          "file": "C33"
                        },
                        {
                          "file": "C34"
                        },
                        {
                          "file": "C37"
                        },
                        {
                          "file": "C42"
                        },
                        {
                          "file": "C45"
                        },
                        {
                          "file": "C46"
                        },
                        {
                          "file": "C49"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block C auditorial stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Audio stimuli sequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "Please, listen to this musical motif.",
                                "content": "When it has finished, you will automatically proceed to the next screen."
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Autoplay",
                            "timeline": [
                              {
                                "type": "sound",
                                "start": 0,
                                "stop": "7000",
                                "priority": 0,
                                "payload": {
                                  "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FEllaSoderberg\u002FEmotionandLiking\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.file}.wav"
                                }
                              }
                            ],
                            "timeout": "7000"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block K",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "You are now about to start a new block.\u003Cbr\u003E\nIf you want to take a break before starting, please do so now.\u003Cbr\u003E\u003Cbr\u003E\n\nTo proceed, click Continue.",
                          "title": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "K1"
                        },
                        {
                          "file": "K2"
                        },
                        {
                          "file": "K3"
                        },
                        {
                          "file": "K4"
                        },
                        {
                          "file": "K5"
                        },
                        {
                          "file": "K6"
                        },
                        {
                          "file": "K7"
                        },
                        {
                          "file": "K9"
                        },
                        {
                          "file": "K10"
                        },
                        {
                          "file": "K12"
                        },
                        {
                          "file": "K19"
                        },
                        {
                          "file": "K27"
                        },
                        {
                          "file": "K29"
                        },
                        {
                          "file": "K33"
                        },
                        {
                          "file": "K34"
                        },
                        {
                          "file": "K40"
                        },
                        {
                          "file": "K41"
                        },
                        {
                          "file": "K42"
                        },
                        {
                          "file": "K43"
                        },
                        {
                          "file": "K46"
                        },
                        {
                          "file": "K47"
                        },
                        {
                          "file": "K48"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block K auditorial stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Audio stimuli sequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "Please, listen to this musical motif.",
                                "content": "When it has finished, you will automatically proceed to the next screen. "
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Autoplay",
                            "timeline": [
                              {
                                "type": "sound",
                                "start": 0,
                                "stop": "7000",
                                "priority": 0,
                                "payload": {
                                  "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FEllaSoderberg\u002FEmotionandLiking\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.file}.wav"
                                }
                              }
                            ],
                            "timeout": "7000"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Block S",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "content": "You are now about to start a new block.\u003Cbr\u003E\nIf you want to take a break before starting, please do so now.\u003Cbr\u003E\u003Cbr\u003E\nTo proceed, click Continue.",
                          "title": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "right",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Starting block"
                    },
                    {
                      "type": "lab.flow.Loop",
                      "templateParameters": [
                        {
                          "file": "S4"
                        },
                        {
                          "file": "S8"
                        },
                        {
                          "file": "S9"
                        },
                        {
                          "file": "S10"
                        },
                        {
                          "file": "S11"
                        },
                        {
                          "file": "S13"
                        },
                        {
                          "file": "S14"
                        },
                        {
                          "file": "S16"
                        },
                        {
                          "file": "S18"
                        },
                        {
                          "file": "S21"
                        },
                        {
                          "file": "S22"
                        },
                        {
                          "file": "S27"
                        },
                        {
                          "file": "S30"
                        },
                        {
                          "file": "S34"
                        },
                        {
                          "file": "S37"
                        },
                        {
                          "file": "S39"
                        },
                        {
                          "file": "S40"
                        },
                        {
                          "file": "S42"
                        },
                        {
                          "file": "S44"
                        },
                        {
                          "file": "S45"
                        },
                        {
                          "file": "S46"
                        },
                        {
                          "file": "S47"
                        }
                      ],
                      "sample": {
                        "mode": "draw-shuffle"
                      },
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Block S auditorial stimuli",
                      "shuffleGroups": [],
                      "template": {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Audio stimuli sequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "Please, listen to this musical motif.",
                                "content": "When it has finished, you will automatically proceed to the next screen. "
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Autoplay",
                            "timeline": [
                              {
                                "type": "sound",
                                "start": 0,
                                "stop": "7000",
                                "priority": 0,
                                "payload": {
                                  "src": "https:\u002F\u002Fraw.githubusercontent.com\u002FEllaSoderberg\u002FEmotionandLiking\u002Fmaster\u002Fstimuli\u002Fauditory\u002F${this.parameters.file}.wav"
                                }
                              }
                            ],
                            "timeout": "7000"
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #like-1": "-2",
                              "click #like-2": "-1",
                              "click #like-3": "0",
                              "click #like-4": "1",
                              "click #like-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Liking",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow much do you like it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n     \u003Cp class=\"info-text\"\u003EI do not like it at all\u003C\u002Fp\u003E\r\n      \u003Cbutton\r\n        id=\"like-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"like-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cp class=\"info-text\"\u003EI like it very much\u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #val-1": "-2",
                              "click #val-2": "-1",
                              "click #val-3": "0",
                              "click #val-4": "1",
                              "click #val-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 1",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"val-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"val-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FValence-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          },
                          {
                            "type": "lab.html.Screen",
                            "files": {},
                            "responses": {
                              "click #arousal-1": "-2",
                              "click #arousal-2": "-1",
                              "click #arousal-3": "0",
                              "click #arousal-4": "1",
                              "click #arousal-5": "2"
                            },
                            "parameters": {},
                            "messageHandlers": {
                              "before:prepare": function anonymous(
) {
this.internals.calibrationClip = new Audio()
this.internals.calibrationClip.src = "https://storage.googleapis.com/study-bucket-2020/" + this.parameters.file + ".wav"
this.internals.calibrationClip.load()
this.data.repeatTimes = 0

this.options.events['click a'] = function(e) {
  e.preventDefault()
  this.data.repeatTimes += 1
  this.internals.calibrationClip.play()
}
}
                            },
                            "title": "Perceiving 2",
                            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Ch2\u003EHow do you perceive it?\u003C\u002Fh2\u003E\r\n    \u003Cb class=\"w-400 text-center\"\u003E\u003Ca href=\"#\"\u003E Click here to listen \u003C\u002Fa\u003E\u003C\u002Fb\u003E\r\n    \u003Cdiv class=\"button-row\"\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-1.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-2.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-3.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-4.svg\" \u002F\u003E\r\n      \u003C!--&nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E--\u003E\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"arousal-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fstudy-bucket-2020\u002FArousal-5.svg\" \u002F\u003E\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "End",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "Thank you so much for completing the tasks.\u003Cbr\u003E\u003Cbr\u003E\nNow, please, answer the following questions with the most appropriate response."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "First part done"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnares",
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "question": "I would prefer complex to simple problems."
                },
                {
                  "question": "I like to have the responsibility of handling a situation that requires a lot of thinking."
                },
                {
                  "question": "Thinking is not my idea of fun."
                },
                {
                  "question": "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities."
                },
                {
                  "question": "I try to anticipate and avoid situations where there is likely chance I will have to think in depth about something."
                },
                {
                  "question": "I find satisfaction in deliberating hard and for long hours."
                },
                {
                  "question": "I only think as hard as I have to."
                },
                {
                  "question": "I prefer to think about small, daily projects to long-term ones."
                },
                {
                  "question": "I like tasks that require little thought once I've learned them."
                },
                {
                  "question": "The idea of relying on thought to make my way to the top appeals to me."
                },
                {
                  "question": "I really enjoy a task that involves coming up with new solutions to problems."
                },
                {
                  "question": "Learning new ways to think doesn't excite me very much."
                },
                {
                  "question": "I prefer my life to be filled with puzzles that I must solve."
                },
                {
                  "question": "The notion of thinking abstractly is appealing to me."
                },
                {
                  "question": "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought."
                },
                {
                  "question": "I feel relief rather than satisfaction after completing a task that required a lot of mental effort."
                },
                {
                  "question": "It's enough for me that something gets the job done; I don't care how or why it works."
                },
                {
                  "question": "I usually end up deliberating about issues even when they do not affect me personally."
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnare one loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "click #choice-1": "1",
                  "click #choice-2": "2",
                  "click #choice-3": "3",
                  "click #choice-4": "4",
                  "click #choice-5": "5",
                  "click #choice-6": "6",
                  "click #choice-7": "7",
                  "click #choice-8": "8",
                  "click #choice-9": "9"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Questionnare 9 values",
                "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cp class=\"font-weight-bold\"\u003E${parameters.question}\u003C\u002Fp\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cbutton\r\n        id=\"choice-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-4\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Very strong disagreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-3\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Strong disagreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Moderate disagreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E-1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Slight disagreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-5\"\r\n        class=\"choice neutral\"\r\n      \u003E\r\n      \u003Cb\u003E0\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n        Neither agreement nor disagreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-6\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Slight agreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-7\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Moderate agreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-8\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E3\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Strong agreement\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-9\"\r\n        class=\"choice\"\r\n      \u003E\r\n      \u003Cb\u003E4\u003C\u002Fb\u003E\u003Cbr\u002F\u003E&nbsp;\u003Cbr\u002F\u003E\r\n        Very strong agreement\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
              }
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "Thank you!\u003Cbr\u003E\u003Cbr\u003E\n\nNow for the final questionnaire."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Message"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "question": "I try to anticipate and avoid situations where there is a likely chance of my getting emotionally involved."
                },
                {
                  "question": "Experiencing strong emotions is not something I enjoy very much."
                },
                {
                  "question": "I would rather be in a situation in which I experience little emotion than one which is sure to get me emotionally involved."
                },
                {
                  "question": "I don't look forward to being in situations that others have found to be emotional."
                },
                {
                  "question": "I look forward to situations that I know are less emotionally involving."
                },
                {
                  "question": "I like to be unemotional in emotional situations."
                },
                {
                  "question": "I find little satisfaction in experiencing strong emotions."
                },
                {
                  "question": "I prefer to keep my feelings under check."
                },
                {
                  "question": "I feel relief rather than fulfilled after experiencing a situation that was very emotional."
                },
                {
                  "question": "I prefer to ignore the emotional aspects of situations rather than getting involved in them."
                },
                {
                  "question": "More often than not, making decisions based on emotions just leads to more errors."
                },
                {
                  "question": "I don't like to have the responsibility of handling a situation that is emotional in nature."
                }
              ],
              "sample": {
                "mode": "sequential"
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnare two loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "click #choice-1": "1",
                  "click #choice-2": "2",
                  "click #choice-3": "3",
                  "click #choice-4": "4",
                  "click #choice-5": "5",
                  "click #choice-6": "6",
                  "click #choice-7": "7",
                  "click #choice-8": "8",
                  "click #choice-9": "9"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Questionnare 5 values",
                "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cp class=\"font-weight-bold\"\u003E${parameters.question}\u003C\u002Fp\u003E\r\n    \u003Cdiv\u003E\r\n      \u003Cbutton\r\n        id=\"choice-1\"\r\n        class=\"choice\"\r\n      \u003E\r\n      &nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E-2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n        Strongly Disagree\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-2\"\r\n        class=\"choice\"\r\n      \u003E\r\n      &nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E-1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      Disagree\u003Cbr\u002F\u003E&nbsp;\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-3\"\r\n        class=\"choice\"\r\n      \u003E\r\n      &nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E0\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      Neutral\u003Cbr\u002F\u003E&nbsp;\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-4\"\r\n        class=\"choice\"\r\n      \u003E\r\n      &nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n      Agree\u003Cbr\u002F\u003E&nbsp;\r\n      \u003C\u002Fbutton\u003E\r\n      \u003Cbutton\r\n        id=\"choice-5\"\r\n        class=\"choice\"\r\n      \u003E\r\n      &nbsp;\u003Cbr\u002F\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\r\n        Strongly Agree\u003Cbr\u002F\u003E&nbsp;\r\n      \u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  Please make your choice by clicking on one of the buttons."
              }
            }
          ]
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Cp class=\"text-center\"\u003EFinally, we would like to learn a bit more about you. \u003C\u002Fp\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd\u003E\n            How old are you, in years?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cdiv id=\"age-error-box\" class=\"errorBox\"\u003E\n              \u003Cb\u003E⚠️ Please check your age.\u003C\u002Fb\u003E\n              \u003Cspan\u003EYou must between 18 and 99 years old to complete the study.\u003C\u002Fspan\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cinput id=\"age-input\" name=\"age\" type=\"number\" required class=\"w-100\" onfocusout=\"checkAgeInput()\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is your current gender identity?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n              \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n              \u003Coption value=\"other\"\u003EOther\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Birth-assigned gender category, following Tate et al.\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              Which gender were you assigned at birth?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"gender-birth\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n                \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is the highest educational degree you have ever achieved?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education_degree\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENone\u003C\u002Foption\u003E\n              \u003Coption value=\"primary\"\u003EPrimary\u003C\u002Foption\u003E\n              \u003Coption value=\"secondary\"\u003ESecondary\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor\u003C\u002Foption\u003E\n              \u003Coption value=\"masters\"\u003EMasters\u003C\u002Foption\u003E\n              \u003Coption value=\"doctorate\"\u003EDoctorate\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is the highest degree of formal education in music that you have ever attained?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education_music\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENone\u003C\u002Foption\u003E\n              \u003Coption value=\"primary\"\u003EPrimary\u003C\u002Foption\u003E\n              \u003Coption value=\"secondary\"\u003ESecondary\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor\u003C\u002Foption\u003E\n              \u003Coption value=\"masters\"\u003EMasters\u003C\u002Foption\u003E\n              \u003Coption value=\"doctorate\"\u003EDoctorate\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is the highest degree of formal education in visual art, architecture, or design that you have ever attained?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education_visual\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003ENone\u003C\u002Foption\u003E\n              \u003Coption value=\"primary\"\u003EPrimary\u003C\u002Foption\u003E\n              \u003Coption value=\"secondary\"\u003ESecondary\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor\u003C\u002Foption\u003E\n              \u003Coption value=\"masters\"\u003EMasters\u003C\u002Foption\u003E\n              \u003Coption value=\"doctorate\"\u003EDoctorate\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton disabled id=\"continue-button\" type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E\n\n\u003Cstyle\u003E\n  .errorBox {\n    display: none; \n    background-color: orangered;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    font-size: 15px;\n  }\n\u003C\u002Fstyle\u003E",
          "parameters": {},
          "responses": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
checkAgeInput = () => {
  let ageInput = document.querySelector('#age-input');
  let ageErrorBox = document.querySelector('#age-error-box');
  let continueButton = document.querySelector('#continue-button');
  
  if (ageInput.value >= 18 && ageInput.value <= 99) {
    continueButton.disabled = false;
    ageErrorBox.style.display = "none";
  }
  else {
    continueButton.disabled = true;
    ageErrorBox.style.display = "block";
  }
}


}
          },
          "title": "Demography form",
          "files": {}
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Congratulations, you have completed the study!",
              "content": "\u003Cb\u003EThank you for participating!\u003C\u002Fb\u003E\u003Cbr\u003E\u003Cbr\u003E\nPlease get our attention and we will finish the study for you."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Download data",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Thank you"
        }
      ]
    }
  ]
})

// Let's go!
study.run()