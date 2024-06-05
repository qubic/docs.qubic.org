# Commands (Draft)

## Key Overview within UEFI Shell

| Key | Function         |
|-----|------------------|
| F1  | Show help        |
| F2  | Prints current tick, transactions and faulty IDs data  |
| F3  | Shows mining stats, calculates who would be computor as of right now and writes the system file  |
| F4  | Disconnects all peers (keep pressed) |
| F5  | "Force next Tick"; Your computor issues empty votes for current tick. (DANGER ZONE)
| F6  | Save Spectrum, Universe and Computor files |
| F10 | Resends Computor Votes for current tick (DANGER ZONE) |
| F11 | Resets test flags |
| F12 | Switching from MAIN to AUX and vice versa (toggle) |
| PAUSE | Stops log output |
| ESC | Graceful shutdown |



Keys **not** used anymore
- F7: Toggles logging of network stats
- F8: Toggles logging of tick/scores stats
- F9: Toggles logging of tick transactions/tick leader

<details>
  <summary>Using Scancodes</summary>
  <div>
  <p>
    In general computing, Scancodes are the unique codes that are sent by a keyboard to a computer's operating system (or, in the Qubic case, the UEFI system) to denote each individual key press and release. When a key is pressed, the keyboard sends a "Make" scancode to the system, and when it is released, it sends a "Break" scancode.
    </p>
        <p>
        Scancodes are used to map the physical keys on a keyboard to characters or functions on the computer. This allows for flexibility in keyboard layout and design, as the scancodes can be mapped differently for different keyboard layouts (like QWERTY vs AZERTY) or for different languages.
        </p>
        <p><b>Relevant Scancodes</b></p>
        <table>
        <tr>
        <td>0x0B</td><td>F1</td>
        </tr>
        <tr>
        <td>0x0C</td><td>F2</td>
        </tr>
        <tr>
        <td>0x0D</td><td>F3</td>
        </tr>
        <tr>
        <td>0x0E</td><td>F4</td>
        </tr>
        <tr>
        <td>0x10</td><td>F6</td>
        </tr>
        <tr>
        <td>0x17</td><td>ESC</td>
        </tr>
        </table>
        <p><b>Note:</b>EFI scancodes are different from Linux/UNIX ones.</p>
        <p>Reference: <a href="https://uefi.org/specs/UEFI/2.10/Apx_B_Console.html">https://uefi.org/specs/UEFI/2.10/Apx_B_Console.html</a></p>
  </div>
</details>


## F1

## F2
The F2 shows the relevant info as `X/Y/Z solutions.` where Z is total number of solutions, Y is number of published solutions and X is number of recorded into the blockchain solutions.

## F5
The F5 command helps maintain synchronization in the Qubic network. If not all 676 Computors are online, votes about the status of the next tick can become split, leading to a consensus issue. Pressing F5 forces agreement that the next tick is empty. However, it carries a risk: if others reach a different consensus after you've hit F5, your node could become misaligned.
