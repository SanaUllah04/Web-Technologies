from django import forms
from .models import Note

class NoteForm(forms.ModelForm):
    color = forms.CharField(
        widget=forms.TextInput(attrs={
            'type': 'color',
            'class': 'color-picker'
        })
    )
    
    class Meta:
        model = Note
        fields = ['title', 'content', 'color', 'is_pinned']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Note title'}),
            'content': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Note content', 'rows': 6, 'id': 'content-field'}),
            'is_pinned': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }
        labels = {
            'is_pinned': 'Pin this note',
        }
