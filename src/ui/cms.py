import tkinter as tk
import tkinter.ttk as ttk
from tkinter import Menu, filedialog, messagebox

# IMPORT MODULES
#from models import vcs

# MAIN WINDOW
root = tk.Tk()
root.title("Offline CMS")
root.geometry("800x600")
root.config(bg="white")


# ROW & COLS CONFIG
root.grid_rowconfigure(1, weight=1)
root.grid_columnconfigure(0, weight=1)
root.grid_columnconfigure(1, weight=1)
root.grid_columnconfigure(2, weight=0)

# Menu Bar
menubar = Menu(root)

# File Menu
file_menu = Menu(menubar, tearoff=0)
file_menu.add_command(label="Open", command=lambda: filedialog.askopenfilename())
file_menu.add_command(label="Save", command=lambda: messagebox.showinfo("Save", "Save functionality not implemented"))
file_menu.add_command(label="Exit", command=root.quit)
menubar.add_cascade(label="File", menu=file_menu)

# VCS Menu
vcs_menu = Menu(menubar, tearoff=0)
vcs_menu.add_command(label="Commit", command=lambda: messagebox.showinfo("Commit", "Commit functionality not implemented"))
vcs_menu.add_command(label="Push", command=lambda: messagebox.showinfo("Push", "Push functionality not implemented"))
vcs_menu.add_command(label="Pull", command=lambda: messagebox.showinfo("Pull", "Pull functionality not implemented"))
menubar.add_cascade(label="VCS", menu=vcs_menu)

# MAIN MENU CONFIG
root.config(menu=menubar)

# D&D AREA FRAME
frame_left = tk.Frame(root, bg="black")
frame_left.grid(row=1, column=0, sticky="nsew")
frame_left.grid_rowconfigure(0, weight=1)
frame_left.grid_columnconfigure(0, weight=1)

# FILE VIEW AREA FRAME
frame_right = tk.Frame(root, bg="black")
frame_right.grid(row=1, column=1, sticky="nsew")
frame_right.grid_rowconfigure(0, weight=1)
frame_right.grid_columnconfigure(0, weight=1)

# D&D AREA LABEL
drag_label = tk.Label(frame_left, text="Drag and drop files to upload", bg="black", fg="white", font=("Arial", 14))
drag_label.grid(sticky="nsew")

# TEXT EDIT
text_edit = tk.Text(frame_right)
text_edit.grid(sticky="nsew")

# SIDEBAR BUTTON FRAME
button_frame = tk.Frame(root, bg="white")
button_frame.grid(row=1, column=2, sticky="ns")

# SIDEBAR BUTTONS
buttons = ["Post Blog", "Add to VCS", "Delete"]
for btn_text in buttons:
    button = tk.Button(button_frame, text=btn_text, bg="#323778", fg="#f0f0f0", font=("Arial", 12), width=15, height=2)
    button.pack(pady=10, padx=10, fill="x")

# Run the main loop
root.mainloop()