# Image Asset Manifest

The build environment that generated this code could not reach `figma.com`
on its network, so the files below are **referenced by path but not present**.
Download each one from its Figma URL and save it at the listed path.

> Figma's asset URLs are temporary — if a link below has expired, re-run
> "Get design context" / "Download assets" on the corresponding node in the
> Figma file (`2.0 moved`, file key `rlkE4fmVeC8XxoMGwFT1P0`) to mint a fresh one.

All paths are relative to `src/assets/images/`.

## Shared (Nav + Footer) — used on every page

| Local path | Figma URL | Node |
|---|---|---|
| `nav-home-fun-button.png` | https://www.figma.com/api/mcp/asset/a414aa30-a433-45e3-af0f-cc9591e68854 | 1:97 (Home fun button / sparkle logo) |
| `footer-linkedin-icon.png` | https://www.figma.com/api/mcp/asset/96364464-a1ad-48a6-9386-61c04e533c47 | 54801:171 (LinkedIn icon mask) |
| `footer-email-icon.png` | https://www.figma.com/api/mcp/asset/21da5b5d-3724-4f1b-bf1d-2b9b7e865121 | 54801:175 (Email icon mask) |
| `nav-tab-home.png` | https://www.figma.com/api/mcp/asset/6dadf9a2-d627-4164-bac1-0ecec5349cb3 | Nav tab shape (Home) |
| `nav-tab-work.png` | https://www.figma.com/api/mcp/asset/6b30b0b1-a4d4-497f-98b5-babbd2c98ed9 | Nav tab shape (Work) |
| `nav-tab-about.png` | https://www.figma.com/api/mcp/asset/65e210d2-a809-4000-a5ac-ff0e17d6426e | Nav tab shape (About) |
| `nav-tab-contact.png` | https://www.figma.com/api/mcp/asset/7d2e3b1c-52e8-43a0-b7dd-8be9f7714bfb | Nav tab shape (Contact) |
| `nav-divider-line.png` | https://www.figma.com/api/mcp/asset/c36aca2b-f1fc-4a90-b3a5-70b021e28eff | Bottom divider line under nav |

> Note: the four nav tab shapes are speech-bubble/file-tab cutout PNGs used as
> background art behind each label. The `NavBar` component swaps which tab
> renders "active" (white background, no shape) based on the current route —
> see `src/components/NavBar.tsx`.

## Home page

| Local path | Figma URL | Node |
|---|---|---|
| `home-web-icon.png` | https://www.figma.com/api/mcp/asset/87666ae4-217a-4c34-8250-04299d9f4129 | 1:93 (hand-drawn squiggle illustration) |
| `home-scroll-arrow.png` | https://www.figma.com/api/mcp/asset/84297dd2-2af3-4480-a1e5-2350f032ee02 | 12:71 (down arrow, image 1) |
| `home-project-macbook.png` | https://www.figma.com/api/mcp/asset/6f655023-5571-4b65-8ddb-ff4faf8e52e3 | 54913:347 (Lustria project laptop mockup) |

## Work (Lustria case study) page

This page is long-form (~15,400px tall in the original) and has ~25 supporting
images (wireframes, mood boards, before/after screenshots, research diagrams).
Rather than enumerate all of them here, the `WorkPage.tsx` component pulls every
image through a single `caseStudyImages` lookup object at the top of the file —
fill in each entry there with its Figma URL (already commented in as a TODO)
and the page will pick it up automatically.

| Local path | Figma URL | Node |
|---|---|---|
| `work-macbook-mockup.png` | https://www.figma.com/api/mcp/asset/e6999801-cf7d-4914-8839-53a6bba731e2 | 54912:325 |
| `work-scroll-top-icon.png` | https://www.figma.com/api/mcp/asset/26831521-4c80-456b-866b-1909f7192d2e | 54887:349 |
| *(remaining ~22 case-study images)* | *see TODO comments in `WorkPage.tsx`* | — |

## About page

| Local path | Figma URL | Node |
|---|---|---|
| `about-photo-bg.png` | https://www.figma.com/api/mcp/asset/c22bca55-d05a-467a-b724-b600054c4975 | 1:138 (decorative background behind photo) |
| `about-photo-me.png` | https://www.figma.com/api/mcp/asset/030e3704-f8ba-43ac-8e65-8080a1b499f8 | 1:139 (profile photo) |

## Contact page

| Local path | Figma URL | Node |
|---|---|---|
| `contact-web-icon.png` | https://www.figma.com/api/mcp/asset/d9391f2c-d53c-4395-b50d-de398d7404e4 | 1:160 (hand-drawn squiggle illustration) |

## Fonts

The Figma file specifies **PP Mondwest** and **PP Neue Montreal**, both paid
fonts from Pangram Pangram (https://pangrampangram.com). They are not free to
redistribute, so they're wired up as `@font-face` rules in `src/index.css`
pointing at `/public/fonts/*.woff2` — drop your licensed font files there with
matching names, or change the `font-family` fallback stacks to fonts you have
rights to use.
