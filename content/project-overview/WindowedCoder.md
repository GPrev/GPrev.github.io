---
title: WindowedCoder
technos: C++, Qt
description: This project was my introduction to coding after a friend taught me the basis of C++ and Qt. The goal of this program is to create and manage simple monoalphabetic cyphers, that could be used to encode and decode messages.
icon: qt.jpg
alt: WindowedCoder
date: 2010
---

```cpp
string coder::codetext(string texte)
{
    string result;
    string save;
    int size = texte.size();

    if (size == 1)
    {
        return codeletter(texte.c_str()[0]);
    }

    else
    {
        for (int i=0 ; i<size ; i++)
        {
            string traduc = codeletter(texte.c_str()[i]);
            result = save + traduc;
            save=result;
        }
        return result;
    }
}

string uncoder::uncodetext(string texte)
{
    int size = texte.size();
    string result;

    if (size==charactersize)
    {
        result = uncodeletter(texte);
        return result;
    }

    else
    {
        string save;

        for (int i=0 ; i<size ; i+=charactersize)
        {
            char traduc = uncodeletter(texte.substr(i,charactersize));
            result = save + traduc;
            save=result;
        }

        return result;
    }
}
```