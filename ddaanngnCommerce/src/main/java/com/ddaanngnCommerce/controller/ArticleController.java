package com.ddaanngnCommerce.controller;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.dto.ArticleResponseDto;
import com.ddaanngnCommerce.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping("/articles/{id}")
    public ResponseEntity<ArticleResponseDto> getArticle(@PathVariable Long id) {
        ArticleResponseDto articleResponseDto = new ArticleResponseDto(articleService.getArticleById(id));
        return ResponseEntity.ok(articleResponseDto);
    }

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleResponseDto>> getArticlesAll() {
        List<ArticleResponseDto> articles = articleService.getArticles()
                .stream().map(ArticleResponseDto::new).collect(Collectors.toList());
        return ResponseEntity.ok(articles);
    }

}
