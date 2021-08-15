package com.ddaanngnCommerce.service;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.domain.ArticleRepository;
import com.ddaanngnCommerce.dto.ArticleCreateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Transactional
    public Article createArticle(ArticleCreateDto articleCreateDto) {
        return articleRepository.save(articleCreateDto.toEntity());
    }

    @Transactional(readOnly = true)
    public List<Article> getArticles() {
        return articleRepository.findAll();
    }

}
